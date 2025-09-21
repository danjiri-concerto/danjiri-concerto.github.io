# だんじり協奏曲 - NextJS Website

このプロジェクトは、だんじり協奏曲のゲーム紹介サイトをHTMLベースからNextJS（React）に刷新したものです。

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm

### 開発サーバーの起動

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。

### ビルドとテスト

```bash
# プロダクションビルド
npm run build

# 静的サイト生成の確認
npm run start
```

## 📁 プロジェクト構成

```
.
├── src/
│   ├── app/                    # App Router ページ
│   │   ├── page.tsx           # メインページ (/)
│   │   ├── contact/           # お問い合わせページ
│   │   ├── en/                # 英語版ページ
│   │   └── minimum-journey/   # ゲーム詳細ページ
│   ├── components/            # Reactコンポーネント
│   │   ├── Header.tsx         # ヘッダーナビゲーション
│   │   ├── Footer.tsx         # フッター
│   │   └── ToggleSection.tsx  # 展開セクション
│   └── styles/
│       └── globals.css        # グローバルスタイル
├── public/
│   └── images/                # 画像ファイル
├── nextjs-backup/             # 元のHTMLファイル（バックアップ）
└── .github/workflows/         # GitHub Actions設定
```

## 🔧 設定ファイル

### next.config.js
- 静的サイト生成設定 (`output: 'export'`)
- GitHub Pages対応設定
- 画像最適化無効化設定

### tailwind.config.ts
- Tailwind CSS設定
- カスタムカラー・テーマ設定

## 🌐 デプロイメント

### GitHub Pages への自動デプロイ

このプロジェクトはGitHub Actionsを使用してGitHub Pagesに自動デプロイされます。

#### 必要な設定手順：

1. **GitHub Pages の設定**
   - GitHubリポジトリの Settings → Pages
   - Source を "GitHub Actions" に設定

2. **GitHub Actions の権限設定**
   - Settings → Actions → General
   - "Workflow permissions" を "Read and write permissions" に設定
   - "Allow GitHub Actions to create and approve pull requests" にチェック

3. **Pages の権限設定**
   - Settings → Pages
   - "Build and deployment" で "GitHub Actions" を選択

#### デプロイフロー：
- `main` ブランチにプッシュすると自動的にビルド・デプロイが実行されます
- ビルド成果物は `out/` ディレクトリに生成されます
- GitHub Pages に静的サイトとしてデプロイされます

### 手動デプロイ

```bash
# ビルド実行
npm run build

# out/ ディレクトリの内容を静的ホスティングサービスにアップロード
```

## 📝 主な変更点（HTML → NextJS移行）

### ページ構成
- `index.html` → `src/app/page.tsx`
- `contact.html` → `src/app/contact/page.tsx`
- `index-en.html` → `src/app/en/page.tsx`
- `minimum-journey/index.html` → `src/app/minimum-journey/page.tsx`

### コンポーネント化
- ナビゲーションバー（モバイル/デスクトップ対応）
- フッター
- 展開可能セクション（誤植訂正など）

### スタイリング
- CSS → Tailwind CSS + カスタムCSS
- レスポンシブ対応維持
- 既存デザイン踏襲

### 画像・アセット
- `images/` → `public/images/`
- Next.js の静的ファイル配信に対応

## 🔍 トラブルシューティング

### 画像が表示されない場合

1. **ローカル開発環境での確認**
   ```bash
   ls public/images/
   ```
   画像ファイルが正しく配置されているか確認

2. **パスの確認**
   - 画像パスは `/images/` から始まるように記述
   - 例：`<img src="/images/logos/danjiri.png" />`

3. **GitHub Pages での確認**
   - リポジトリ設定でPages機能が有効になっているか確認
   - Actions タブでビルドが成功しているか確認

### ビルドエラーの対処

1. **依存関係の再インストール**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScriptエラー**
   - `npm run build` でエラー内容を確認
   - 型定義の不整合を修正

3. **Next.js キャッシュクリア**
   ```bash
   rm -rf .next
   npm run build
   ```

## 📊 パフォーマンス

- 静的サイト生成により高速表示
- 画像最適化（WebP対応）
- CSS/JSの自動最適化
- GitHub Pages CDN活用

## 🛠 開発時の注意事項

1. **画像の追加**
   - 新しい画像は `public/images/` に配置
   - パスは `/images/` から記述

2. **新しいページの追加**
   - `src/app/` 下に新しいディレクトリとpage.tsxを作成
   - ルーティングは自動的に設定される

3. **スタイルの変更**
   - Tailwind CSS クラス使用推奨
   - カスタムCSSは `src/styles/globals.css` に追加

4. **コンポーネントの追加**
   - `src/components/` に新しいコンポーネントを作成
   - TypeScript + React の形式で記述