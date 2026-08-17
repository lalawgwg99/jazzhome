# JazzHome 家電研究室

冷氣、冰箱、洗衣機、電視選購攻略網站。以自建站為 SEO 主陣地，方格子作同步備份渠道。

- **GitHub**：https://github.com/lalawgwg99/jazzhome
- **部署**：Cloudflare Pages

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
| `NEXT_PUBLIC_GA_ID` | GA4 量測 ID（選填） |

## 靜態匯出設定

本專案使用 `next.config.ts` 的 `output: "export"`，建置輸出至 `out/` 目錄。

**限制：** 不支援 API Routes（`app/api`）與 Server Actions。若需後端功能，請改用 Cloudflare Workers。

## GA4 追蹤碼

1. 到 [Google Analytics](https://analytics.google.com) 建立資源，取得量測 ID（格式 `G-XXXXXXXXXX`）
2. Cloudflare Pages → **jazzhome** → **Settings** → **Environment variables**
3. 新增 `NEXT_PUBLIC_GA_ID` = 你的 GA4 ID
4. 重新部署（Deployments → Retry deployment）

本地測試：在 `.env.local` 設定相同變數後執行 `npm run dev`。

## Google Search Console

1. 到 [Search Console](https://search.google.com/search-console) 新增資源：`https://jazzhome.pages.dev`
2. 驗證方式：HTML 檔案（已內建 `public/google5a11a980cd1fa9fb.html`）
3. 左側 **Sitemap** → 提交：`https://jazzhome.pages.dev/sitemap.xml`

## 變更網域注意事項

綁定自訂網域後，請更新 Cloudflare 環境變數：

- `NEXT_PUBLIC_SITE_URL` → 新網址（影響 canonical、sitemap）
- 手動觸發一次重新部署

## 部署到 Cloudflare Pages

1. 到 [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. **Connect to Git** → 選 `lalawgwg99/jazzhome`
3. 建置設定：

| 項目 | 值 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | 20 |

4. 環境變數：`NEXT_PUBLIC_SITE_URL` = 你的 Cloudflare 網域
5. **Custom domains** 綁定自訂網域（選用）

## 上線後讓 Google 收錄

1. [Google Search Console](https://search.google.com/search-console) 新增資源並驗證
2. 提交 Sitemap：`https://你的網域/sitemap.xml`

## 內容發布流程

1. 在 `src/lib/articles.ts` 新增文章 → push → Cloudflare 自動部署
2. 48 小時後方格子發摘要版，文末加「閱讀全文 → 自建站 URL」

## 授權

MIT
