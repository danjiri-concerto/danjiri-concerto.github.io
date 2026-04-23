# だんじり協奏曲 — サイト概要 (CLAUDE.md)

## プロジェクト概要

**だんじり協奏曲**はボードゲーム制作サークルの公式 GitHub Pages サイトです。  
URL: `https://danjiri-concerto.github.io/`

### 制作ゲーム
| タイトル | ジャンル | ページパス |
|---|---|---|
| MINIMUM JOURNEY | デッキ構築・宇宙開発競争 | `/minimum-journey/` |
| 我廻る、故に我あり | エンジンビルド・ワーカープレイスメント | `/i-revolve-therefore-i-am/` |

---

## ディレクトリ構成

```
/
├── index.html                     # トップページ（ゲーム一覧）
├── index-en.html                  # 英語版トップページ
├── contact.html                   # お問い合わせページ
├── game.html                      # ゲーム一覧（モバイル用）
├── sitemap.xml                    # サイトマップ
│
├── css/
│   └── style.css                  # 全ページ共通スタイルシート
│
├── images/
│   ├── header.webp                # トップページヒーロー画像
│   ├── logos/danjiri.png          # ファビコン・ロゴ
│   ├── minimum-journey/           # MJ用画像
│   └── i-revolve-therefore-i-am/ # 我廻る用画像
│
├── minimum-journey/
│   ├── index.html                 # MJゲームページ
│   └── faq.html                   # MJ FAQ
│
├── i-revolve-therefore-i-am/
│   ├── index.html                 # 我廻るゲームページ
│   └── faq.html                   # 我廻る FAQ
│
├── rulebooks/                     # PDFルールブック（ローカル保管分）
│   ├── minimum_journey_rulebook.pdf
│   └── minimum_journey_rulebook_en.pdf
│
├── scripts/
│   └── convert_faq.py             # FAQ変換スクリプト（Python）
│
# ── 共有HTMLフラグメント ──────────────────────────────────
├── navbar-desktop.html            # PC用ナビゲーションバー
├── navbar-mobile.html             # モバイル用ナビゲーションバー
├── footer.html                    # フッター
│
# ── JavaScript ────────────────────────────────────────────
├── loadHtml.js                    # fetch() でHTMLフラグメントを挿入
└── device-detection.js            # UA判定・ナビゲーションバー切り替え
```

---

## アーキテクチャ

### HTML フラグメントの動的読み込み

ナビゲーションバーとフッターは `loadHtml.js` の `loadHtml()` 関数で `fetch()` してページに挿入します。

```html
<!-- 各ページ共通の末尾スクリプト -->
<div id="footer-placeholder"></div>
<script>loadHtml("footer-placeholder", "/footer.html");</script>
```

ナビゲーションバーは `device-detection.js` が UA と画面幅 (≤768px) を判定し、  
`navbar-desktop.html` または `navbar-mobile.html` を読み込みます。

### CSS 設計方針

`css/style.css` 一枚に全スタイルを集約しています。

- **CSS変数** (`:root` の `--color-*`, `--font`, `--ease`, `--radius`, `--shadow-*`) で色・フォント・影を一元管理
- Google Fonts `Noto Sans JP` を `@import` で読み込み
- `clamp()` でレスポンシブな文字サイズを実現
- モバイルブレークポイントは `@media (max-width: 768px)`

### セクション ID の命名規則

| ID | 用途 |
|---|---|
| `#hero` | トップページヒーロー |
| `#hero-mj` | MINIMUM JOURNEY ヒーロー |
| `#hero-revolve` | 我廻るヒーロー |
| `#games` | トップページのゲーム一覧 |
| `#about` / `#rule` / `#reservation` / `#error` / `#faq` | 各ゲームページ内セクション |

---

## 新しいゲームを追加する手順

1. **ディレクトリ作成**  
   `/<game-slug>/index.html` と `/<game-slug>/faq.html` を作成

2. **ヒーロー画像**  
   `images/<game-slug>/` に WebP 形式で用意し、`css/style.css` に `#hero-<game-slug>` セクションを追記

3. **ナビゲーションバーに追加**  
   `navbar-desktop.html` と `navbar-mobile.html` のゲームリストに `<li>` を追加

4. **トップページに追加**  
   `index.html` の `#games` セクションに `.game-item` ブロックを追加

5. **sitemap.xml を更新**  
   新ページの URL を追加

---

## 開発ワークフロー

### ローカル確認

GitHub Pages は静的サイトのため、ローカルサーバーが必要です（`fetch()` 使用のため）。

```bash
# Python 3（推奨）
python3 -m http.server 8000
# → http://localhost:8000/

# Node.js (npx)
npx serve .
```

### ブランチ運用

- `main`     : 本番前の統合ブランチ
- `gh-pages` : GitHub Pages 公開ブランチ（本番）

### デプロイ

`gh-pages` ブランチに push するとサイトが自動更新されます。

```bash
git checkout gh-pages
git merge main
git push origin gh-pages
```

---

## CSS カスタムプロパティ一覧

| 変数名 | 値 | 用途 |
|---|---|---|
| `--color-bg` | `#f6f6f8` | ページ背景 |
| `--color-text` | `#1e1e2e` | 本文テキスト |
| `--color-dark` | `#1e1e2e` | ヘッダー・フッター背景 |
| `--color-dark-soft` | `#2d2d3f` | ドロップダウン背景 |
| `--color-light` | `#f0f0f2` | ダーク背景上のテキスト |
| `--color-accent` | `#5e81f4` | アクセントカラー（リンク・ボーダー） |
| `--color-accent-dark` | `#3d5bd9` | アクセントホバー |
| `--color-danger` | `#e64e4e` | 重要表記 (`.highlight`) |
| `--font` | `'Noto Sans JP', Arial, sans-serif` | 全ページフォント |
| `--ease` | `0.25s ease` | トランジション速度 |
| `--radius` | `14px` | 角丸サイズ |
| `--shadow-sm/md/lg` | 各種 `box-shadow` | 影の深さ |

---

## FAQ 管理

FAQ は `scripts/convert_faq.py` で変換生成します（Python 3 / uv 環境）。

```bash
# 仮想環境のアクティベート
source .venv/bin/activate
# または uv run
uv run python scripts/convert_faq.py
```

---

## 連絡先・SNS

- メール: `danjiri.concerto at gmail.com`
- X (Twitter): `@danjiriconcerto`
