# JazzHome 家電研究室

冷氣選購與安裝避坑網站。先把噸數、室外機、排水講清楚，再決定要不要買。

- **GitHub**：https://github.com/lalawgwg99/jazzhome
- **線上站**：https://jazzhome.pages.dev
- **部署**：Cloudflare Pages（目前由 GitHub Actions 建置後上傳 `out/`）

## 上線前必填

靜態匯出會把 `NEXT_PUBLIC_*` **寫進 HTML**，必須在 GitHub 建置時就有值。Cloudflare Pages 後台的環境變數不會改到已建置的靜態檔。

在 GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **Variables**：

| 變數 | 說明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 正式網址。還沒綁網域就用 `https://jazzhome.pages.dev`；綁定後改成自訂網域並重新部署 |
| `NEXT_PUBLIC_LINE_URL` | 真實 LINE 官方帳號，例如 `https://line.me/R/ti/p/@你的ID` |
| `NEXT_PUBLIC_GA_ID` | GA4 量測 ID（選填） |

Secrets：`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`（Actions 部署用）。

**自訂網域：** Cloudflare Dashboard → jazzhome → **Custom domains** 綁定後，把 `NEXT_PUBLIC_SITE_URL` 改成新網址，再 push 或 Retry deployment。Search Console 請對**新網域**驗證並提交 sitemap。

**不要雙寫部署：** 本 repo 已用 Actions `pages deploy`。若 Cloudflare Pages 也開了 Connect to Git，關掉其中一條，避免互相覆蓋。

## 技術棧

- Next.js 16（App Router、靜態匯出）
- Tailwind CSS 4
- Noto Sans TC
- GitHub + Cloudflare Pages

## 本地開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 環境變數

```bash
cp .env.example .env.local
```

| 變數 | 說明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 正式站網址（例：`https://jazzhome.pages.dev`） |
| `NEXT_PUBLIC_LINE_URL` | LINE 官方帳號連結 |
| `NEXT_PUBLIC_GA_ID` | GA4 量測 ID（選填） |

## 靜態匯出設定

本專案使用 `next.config.ts` 的 `output: "export"`，建置輸出至 `out/` 目錄。

**限制：** 不支援 API Routes（`app/api`）與 Server Actions。若需後端功能，請改用 Cloudflare Workers。

## GA4 追蹤碼

1. 到 [Google Analytics](https://analytics.google.com) 建立資源，取得量測 ID（格式 `G-XXXXXXXXXX`）
2. GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **Variables**
3. 新增 `NEXT_PUBLIC_GA_ID` = 你的 GA4 ID
4. push 或 Retry 一次 Actions 部署（靜態檔在建置時寫入 ID）

本地測試：在 `.env.local` 設定相同變數後執行 `npm run dev`。

## Google Search Console

1. 到 [Search Console](https://search.google.com/search-console) 新增資源：`https://jazzhome.pages.dev`
2. 驗證方式：HTML 檔案（已內建 `public/google5a11a980cd1fa9fb.html`）
3. 左側 **Sitemap** → 提交：`https://jazzhome.pages.dev/sitemap.xml`

## 變更網域注意事項

綁定自訂網域後，請更新 GitHub Actions 變數（不是 Cloudflare Pages 環境變數）：

- `NEXT_PUBLIC_SITE_URL` → 新網址（影響 canonical、sitemap）
- 再跑一次 Actions 部署，讓靜態檔寫入新網址

## 部署

專案已在 Cloudflare Pages，名稱 `jazzhome`。之後只要 push `main`，GitHub Actions 會建置並 `pages deploy`。

若要從頭建一次（通常不用）：

1. Cloudflare Dashboard 建立 Pages 專案 `jazzhome`（Direct Upload 即可，不要再 Connect to Git）
2. GitHub Actions 填好 `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID` 與 `NEXT_PUBLIC_SITE_URL`
3. **Custom domains** 綁定自訂網域（選用）

## 上線後讓 Google 收錄

1. [Google Search Console](https://search.google.com/search-console) 新增資源並驗證
2. 提交 Sitemap：`https://你的網域/sitemap.xml`

## 內容發布流程

1. 在 `src/lib/articles.ts` 新增或加厚文章 → push → Cloudflare 自動部署
2. 方格子摘要等單篇有完整小標與對照表再發，文末加「閱讀全文 → 本站 URL」。薄文不要同步。

## 授權

MIT
