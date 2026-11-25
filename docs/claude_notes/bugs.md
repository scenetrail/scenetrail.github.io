# 不具合の記録（SceneTrail）

## 2026-11-25 試作品で YouTube の埋め込みが灰色の「×」になり再生できない

- **起きたこと**: `http://127.0.0.1:8765/` で試作品を開くと、予告編の枠が灰色（壊れたページの絵）になった
- **原因**: 別のプロジェクト（stereophonic_sound の d-browser-app）が同じ `127.0.0.1:8765` で `coi-serviceworker.js` を登録していた。サービスワーカーは「生まれ（scheme＋host＋port）」ごとに残るので、別のサーバーで開いても動き続け、`Cross-Origin-Embedder-Policy: require-corp` を付けて外の iframe（YouTube）を止めた。`self.crossOriginIsolated === true` で分かる
- **直したこと**: そのサービスワーカーを外し、試作品は専用のポート **8781** で開くことにした
- **再発防止**: 手元で開くページは、プロジェクトごとに決めたポートを使う。外の埋め込みが出ないときは、まず `navigator.serviceWorker.getRegistrations()` と `crossOriginIsolated` を見る。本番（GitHub Pages）にサービスワーカーを入れるときは COEP を付けない（YouTube が止まる）
