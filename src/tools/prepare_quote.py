"""引用の画像を仕様 6章の条件に合わせて整え、非公開の置き場へ入れる。

使い方:
  .venv/bin/python src/tools/prepare_quote.py <撮った画像> <場面ID> \
      --video <YouTubeの動画ID> --start <秒> --title "<動画の題>" --channel "<公式チャンネル名>"

すること（これ以外の加工はしない＝「手を加えない」）:
  - 画面写真の外周（プレーヤーの角の丸み）を数 px 切る
  - 上下左右の黒帯を切る
  - 長辺を 640px 以下に縮める
  - 取得元（動画・秒数・撮った日）を quotes.json に記録する

置き場はリポジトリの外（Public に入れないため）。既定は ~/projects/scenetrail_private/quotes/<作品>/
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import sys
from pathlib import Path

from PIL import Image

MAX_LONG = 640
EDGE = 4  # プレーヤーの角の丸みを落とす幅
BLACK = 16  # これより暗い行・列は黒帯とみなす


def private_dir(work: str) -> Path:
    base = Path(os.environ.get("SCENETRAIL_PRIVATE", Path.home() / "projects" / "scenetrail_private"))
    d = base / "quotes" / work
    repo = Path(__file__).resolve().parents[2]
    if repo in d.resolve().parents or d.resolve() == repo:
        sys.exit(f"置き場がリポジトリの中です（Public に入ってしまう）: {d}")
    d.mkdir(parents=True, exist_ok=True)
    return d


def trim_black(im: Image.Image) -> Image.Image:
    g = im.convert("L")
    w, h = g.size
    px = g.load()

    def row_dark(y):
        return max(px[x, y] for x in range(0, w, 4)) < BLACK

    def col_dark(x):
        return max(px[x, y] for y in range(0, h, 4)) < BLACK

    top = 0
    while top < h // 3 and row_dark(top):
        top += 1
    bottom = h
    while bottom > h * 2 // 3 and row_dark(bottom - 1):
        bottom -= 1
    left = 0
    while left < w // 3 and col_dark(left):
        left += 1
    right = w
    while right > w * 2 // 3 and col_dark(right - 1):
        right -= 1
    return im.crop((left, top, right, bottom))


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("image")
    ap.add_argument("scene_id")
    ap.add_argument("--work", default="kiminona")
    ap.add_argument("--video", required=True)
    ap.add_argument("--start", type=float, required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--channel", required=True)
    a = ap.parse_args()

    src = Path(a.image)
    if not src.is_file():
        sys.exit(f"画像がありません: {src}")
    im = Image.open(src).convert("RGB")
    w, h = im.size
    im = im.crop((EDGE, EDGE, w - EDGE, h - EDGE))
    im = trim_black(im)
    im.thumbnail((MAX_LONG, MAX_LONG), Image.Resampling.LANCZOS)

    d = private_dir(a.work)
    out = d / f"{a.scene_id}.jpg"
    im.save(out, "JPEG", quality=85)

    meta_path = d / "quotes.json"
    meta = json.loads(meta_path.read_text()) if meta_path.exists() else {}
    meta[a.scene_id] = {
        "file": out.name,
        "size": list(im.size),
        "obtained_from": {
            "type": "official_youtube",
            "video_id": a.video,
            "url": f"https://www.youtube.com/watch?v={a.video}&t={int(a.start)}s",
            "title": a.title,
            "channel": a.channel,
            "start_sec": a.start,
        },
        "captured_on": dt.date.today().isoformat(),
        "edits": "外周を切る・黒帯を切る・縮小のみ",
    }
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=1) + "\n")
    print(f"{out}  {im.size[0]}x{im.size[1]}")


if __name__ == "__main__":
    main()
