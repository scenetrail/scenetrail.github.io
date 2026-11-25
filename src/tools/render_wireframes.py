"""docs/ui/wireframes/*.html を画面写真（PNG）にする。

使い方: .venv/bin/python src/tools/render_wireframes.py
出力: docs/ui/screens/<名前>_sp.png（幅375）と、作品ページは <名前>_pc.png（幅1280）も
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "docs/ui/wireframes"
OUT = ROOT / "docs/ui/screens"
PC_PAGES = {"w2_work", "w2en_work", "w3_place_quote"}


def main() -> None:
    pages = sorted(SRC.glob("*.html"))
    if not pages:
        raise SystemExit(f"ワイヤーフレームがありません: {SRC}")
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        try:
            for html in pages:
                sizes = [("sp", 375)] + ([("pc", 1280)] if html.stem in PC_PAGES else [])
                for tag, width in sizes:
                    page = browser.new_page(viewport={"width": width, "height": 800})
                    page.goto(html.as_uri(), timeout=15000)
                    out = OUT / f"{html.stem}_{tag}.png"
                    page.screenshot(path=str(out), full_page=True, timeout=15000)
                    page.close()
                    print(out.relative_to(ROOT))
        finally:
            browser.close()


if __name__ == "__main__":
    main()
