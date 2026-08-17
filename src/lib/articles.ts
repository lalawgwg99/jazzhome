import type { CategorySlug } from "./categories";
import type { AffiliateProduct } from "./monetization";
import type { ArticleVerification } from "./trust";

export interface ArticleSection {
  heading: string;
  body: string[];
  callout?: {
    type: "tip" | "warning" | "note";
    title: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  featured?: boolean;
  takeaways?: string[]; // 30秒重點摘要 (Apple Newsroom / Wirecutter 專業可讀性)
  sections: ArticleSection[];
  affiliateProducts?: AffiliateProduct[];
  verification?: ArticleVerification;
  relatedToolSlug?: string;
}

export const articles: Article[] = [
  {
    slug: "ac-2026-subsidies-and-tax-refund",
    title: "2026 台灣冷氣節能補助與退稅全攻略：最高現省 5,000 元申請流程與避坑",
    description:
      "經濟部住宅家電汰舊換新節能補助（3,000元）與財政部貨物稅退稅（最高2,000元）合併申請教學。發票品名、廢四機回收聯單與退稅帳戶注意事項一次搞懂。",
    category: "air-conditioner",
    keywords: ["冷氣補助", "冷氣退稅", "貨物稅退稅", "汰舊換新補助", "節能家電補助2026", "廢四機回收聯單"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingMinutes: 6,
    featured: true,
    relatedToolSlug: "ac-calculator",
    takeaways: [
      "一級能效冷氣最高可領 5,000 元（汰舊換新 3,000 元 + 貨物稅退稅最高 2,000 元）。",
      "「汰舊換新補助」必須有一台舊冷氣報廢，並向安裝師傅索取「廢四機回收聯單第三聯（消費者留存聯）」。",
      "發票上必須載明「完整品牌與室內外機型號」，不可僅開立模糊的「家電一批」。",
      "貨物稅退稅為線上即時申辦，購買日起 6 個月內皆可向國稅局申請，直撥退稅至銀行帳戶。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "經濟部能源署節能補助專區與財政部稅務入口網節能電器退還減徵貨物稅規定",
      lastVerified: "2026-08-18",
      note: "依 2026 年度政府最新公布之節能與減稅方案實務編撰。",
    },
    sections: [
      {
        heading: "一、2026 兩大補助金額與適用條件對照",
        body: [
          "台灣目前購買一級能效冷氣，主要享有兩筆互不衝突的政府補助與減稅，兩者可以「同時申請」：",
          "1. 經濟部【住宅家電汰舊換新節能補助】：每台補助新台幣 3,000 元。條件是必須『汰舊換新』（買新冷氣同時報廢一台舊冷氣），且新機必須為能源效率 1 級產品。",
          "2. 財政部【購買節能電器退還減徵貨物稅】：依冷房能力退稅 1,600 元至 2,000 元。不論有無舊機報廢，只要購買符合一二級能效之新冷氣皆可退稅。",
        ],
        table: {
          headers: ["補助項目", "主管機關", "補助/退稅金額", "必備條件", "申請期限"],
          rows: [
            ["住宅家電汰舊換新", "經濟部能源署", "固定 NT$ 3,000 / 台", "需有舊機報廢回收單 + 1級能效", "年度經費用罄即止"],
            ["減徵貨物稅 (額定冷房 < 3.6kW)", "財政部國稅局", "NT$ 1,600 / 台", "一級或二級能效新機", "購買日起 6 個月內"],
            ["減徵貨物稅 (額定冷房 ≥ 3.6kW)", "財政部國稅局", "NT$ 2,000 / 台", "一級或二級能效新機", "購買日起 6 個月內"],
            ["合計最高現省", "中央雙重補助", "最高 NT$ 5,000 / 台", "符合上述兩項條件", "依個別規定"],
          ],
        },
      },
      {
        heading: "二、申請必備文件清單（安裝當天一定要拿到）",
        body: [
          "許多消費者因現場漏拿單據而無法申請，請務必在安裝當天向店家與師傅索取：",
          "1. 統一發票或電子發票證明聯：發票備註欄或品名必須清楚打上『室內機與室外機完整型號』，不可只寫冷氣一台。",
          "2. 廢四機回收聯單（第三聯消費者存查聯）：舊機拆走時，回收師傅必須當場填寫並簽名交付第三聯，上面需記載舊機回收地點與日期。",
          "3. 保證書/保固卡：需加蓋經銷商或安裝店章，並拍照上傳機身序號標籤。",
          "4. 申請人身分證正反面影本、存摺封面影本、最近一期台電電費單（電號戶名需與裝機地址相符）。",
        ],
        callout: {
          type: "warning",
          title: "常見被退件原因",
          text: "發票無詳細機型型號、或廢四機回收地址與新裝機地址不符，是國稅局與能源署退件率最高的前兩名原因！請開立發票時務必逐字核對型號字母。",
        },
      },
      {
        heading: "三、線上申請三步驟（免出門、直撥帳戶）",
        body: [
          "步驟 1：至『住宅家電汰舊換新節能補助』官網，以手機號碼驗證並上傳身分證、存摺、發票、電費單與廢四機聯單拍照檔，完成 3,000 元申請。",
          "步驟 2：至『財政部稅務入口網 - 購買節能電器退還減徵貨物稅專區』，免用憑證或使用健保卡/自然人憑證，填寫發票號碼與機號，完成 1,600~2,000 元退稅申請。",
          "步驟 3：約 15~30 個工作天審核通過後，退稅款將直接匯入指定的銀行或郵局存摺帳戶。",
        ],
      },
    ],
  },
  {
    slug: "ac-brand-comparison-taiwan",
    title: "2026 台灣五大冷氣品牌深度評比：大金、日立、國際、三菱電機、三菱重工誰最適合你？",
    description:
      "日本原裝 vs 台灣組裝、壓縮機技術、CSPF 省電能效、防霉防臭塗層與售後維修速度。深入解析台灣消費者最在意的 5 大冷氣品牌定位與真實優缺點。",
    category: "air-conditioner",
    keywords: ["冷氣品牌推薦", "大金冷氣", "日立冷氣", "國際牌冷氣", "三菱電機冷氣", "三菱重工冷氣", "冷氣比較"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingMinutes: 8,
    featured: true,
    relatedToolSlug: "ac-calculator",
    takeaways: [
      "安靜溫控與客廳長距送風：首選三菱重工（航太噴射氣流、大坪數首選）與大金（溫濕雙控、低頻運轉穩定）。",
      "售後維修密集度與全機防霉：首選國際牌 Panasonic（全省服務站最多、nanoeX 抑菌除臭成熟、性價比極高）。",
      "用料紮實與容易自行拆洗：首選三菱電機（Easy Clean 專利可掀出風葉片、自行清潔風輪無死角）。",
      "台灣在地深耕與客製化機種：首選日立 Hitachi（凍結洗淨、保固維修方便、規格齊全）。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "台灣各大品牌 2026 原廠型錄、CSPF 標章登錄數據與第一線維修工程技師反饋",
      lastVerified: "2026-08-18",
      note: "客觀評析各品牌系列定位，不偏袒單一廠商。",
    },
    sections: [
      {
        heading: "一、五大主流品牌規格與核心技術總覽",
        body: [
          "在台灣冷氣市場，日系品牌佔據超過 80% 的家用高階份額。各品牌的核心強項與性格差異非常鮮明：",
        ],
        table: {
          headers: ["品牌", "主力代表系列", "核心技術亮點", "優勢", "選購注意點"],
          rows: [
            ["大金 Daikin", "橫綱V / 經典V", "溫濕雙控 (Hybrid Cooling)、航太搖擺式壓縮機", "恆溫極佳、體感不濕冷、低頻穩定", "室外機體積偏大，陽台需量空間"],
            ["國際牌 Panasonic", "RX / UX / QX系列", "nanoeX 48兆微粒子、乾燥防霉自體淨", "省電 CSPF 頂天、全台維修快、APP生態好", "部分入門款需注意風切聲調校"],
            ["三菱電機 ME", "GR靜音大師 / GT系列", "Easy Clean 專利可拆洗、霧之峰人感", "自己就能拆開洗風輪、極度安靜", "高階款定價較高、外觀較方正傳統"],
            ["三菱重工 MHI", "ZSXT / ZST / ZRT系列", "JET 航太噴射氣流、3D Auto 廣角送風", "超長距離送風、冷房速度極快、耐操", "全台展示點較少、以專業經銷商為主"],
            ["日立 Hitachi", "尊榮 / 頂級 / 旗艦系列", "凍結洗淨 3.0+ / 熱烘除菌", "自體清潔完善、在地維修成熟、規格齊全", "選購需注意頂級與入門款產地用料差異"],
          ],
        },
      },
      {
        heading: "二、不同空間與需求的品牌挑選指南",
        body: [
          "1. 淺眠怕吵的臥室：首選【三菱電機 GR 靜音大師】或【大金 橫綱V 系列】。兩者的極低頻運轉音僅 19dB，夜間無壓縮機高頻震動。",
          "2. 長型客餐廳 / 開放式挑高大客廳：首選【三菱重工 ZRT / ZST 系列】。JET 噴射氣流可將冷風直接吹送達 12~17 公尺，客廳與餐廳一次涼透。",
          "3. 重視防霉防酸臭 / 家中有過敏兒：首選【國際牌 RX 旗艦系列】或【日立 尊榮系列】。開機 nanoeX 主動抑菌，關機後自動以凍結凝水洗淨鋁鰭片並加熱烘乾。",
          "4. 租屋處 / 小資預算優先：選擇【國際牌 LJ/QX系列】或各大二線一級能效變頻（如禾聯、聲寶、東元），兼顧預算與節能補助。",
        ],
        callout: {
          type: "tip",
          title: "技師提醒",
          text: "冷氣耐用度有 70% 決定在安裝品質（抽真空、排水坡度、銅管喇叭口）。即使買頂級大金或三菱，若安裝偷工減料依然會漏水漏冷媒。挑選優良施工團隊比品牌本身更關鍵！",
        },
      },
    ],
  },
  {
    slug: "air-conditioner-tonnage-guide",
    title: "冷氣坪數怎麼算？1 坪要幾噸冷氣一次搞懂（附 2026 台灣實務對照表）",
    description:
      "買冷氣最怕吹不涼或買太大浪費電。用台灣常見室內坪數對照表，教你精確估算冷氣噸數與 kW 冷房能力，頂樓西曬加成一次算好。",
    category: "air-conditioner",
    keywords: ["冷氣坪數", "冷氣噸數", "1坪幾噸冷氣", "冷氣容量計算", "kW換算", "變頻冷氣挑選"],
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-18",
    readingMinutes: 6,
    featured: true,
    relatedToolSlug: "ac-calculator",
    takeaways: [
      "台灣通用估算標準：一般無西曬房間每坪約需 500 kcal/h（約 0.55~0.58 kW 冷房能力）。",
      "頂樓加蓋、西曬房、大落地窗需主動加成 15%~20% 冷房能力，避免夏日正午壓縮機超頻耗電。",
      "買冷氣看「額定冷房能力 kW」，不要只看傳統俗稱的「幾噸」，以原廠型錄 kW 最精確。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "各大品牌原廠型錄冷房能力 (kW) 與 CSPF 能源效率標示",
      lastVerified: "2026-08-18",
      note: "依台灣經濟部能源署能效標準與第一線冷氣安裝工程經驗整理，非廠商業配。",
    },
    sections: [
      {
        heading: "一、為什麼「買對噸數」比品牌更重要？",
        body: [
          "買冷氣時，消費者常把焦點放在品牌或功能，但實務上「噸數選錯」才是最常見的後悔原因。",
          "噸數過小：壓縮機長時間全速超頻運轉，房間永遠降不到設定溫度，不僅耗電量暴增，壓縮機壽命也會大幅縮短。",
          "噸數過大：冷房雖快，但壓縮機頻繁降頻或停止除濕，導致室內忽冷忽熱且體感潮濕悶熱，初期購機成本也平白多花數千至上萬元。",
        ],
        callout: {
          type: "warning",
          title: "選購鐵則",
          text: "冷氣容量宜「寧大勿小」，但僅需抓在安全餘裕（多 10%～15%），切勿盲目買過大機種。",
        },
      },
      {
        heading: "二、坪數與冷房能力（kW / 噸數）換算公式",
        body: [
          "在台灣，傳統習慣稱「噸」，但原廠規格與能效標章皆以「kW（千瓦）」為標準單位。",
          "基礎冷房能力計算公式：每 1 坪一般空間約需 500 kcal/h（約合 2.3 kW / 4 坪，即每坪約需 0.58 kW 冷房能力）。",
          "換算簡便速記：1 坪 ≈ 0.55～0.6 kW（或每坪約 0.05～0.06 台灣噸）。",
        ],
        table: {
          headers: ["房間坪數", "空間類型", "建議冷房能力 (kW)", "建議市售噸數標示"],
          rows: [
            ["3～4 坪", "單人臥室 / 書房", "2.2 kW ～ 2.8 kW", "約 1.0～1.2 噸 (2.2~2.8kW)"],
            ["4～6 坪", "主臥房 / 一般雅房", "2.8 kW ～ 3.6 kW", "約 1.3～1.5 噸 (3.6kW)"],
            ["6～8 坪", "主臥加衛浴 / 小客廳", "4.1 kW ～ 5.0 kW", "約 1.8～2.2 噸 (4.1~5.0kW)"],
            ["8～10 坪", "客餐廳開放空間", "5.0 kW ～ 6.3 kW", "約 2.5～2.8 噸 (6.3kW)"],
            ["10～14 坪", "大客廳 / 透天大空間", "7.1 kW ～ 8.5 kW", "約 3.0～3.5 噸 (7.1~8.5kW)"],
          ],
        },
      },
      {
        heading: "三、必須「額外加成」的 4 大環境熱源",
        body: [
          "如果你的空間有以下情況，請在基礎需求上主動上調冷房能力：",
          "1. 頂樓加蓋或頂樓戶：上方無遮蔽，烈日直曬天花板聚熱嚴重，建議增加 15%～20%。",
          "2. 西曬嚴重：午後陽光直射大面積玻璃窗，建議增加 15%～20%。",
          "3. 挑高空間或客餐廳開放式：空間體積較大，且連接廚房熱源或走道，建議增加 10%～15%。",
          "4. 玻璃帷幕或大面積落地窗：熱輻射穿透率高，建議增加 10%。",
        ],
        callout: {
          type: "tip",
          title: "試算建議",
          text: "可直接使用本站「冷氣坪數與噸數計算器」，勾選環境條件即可自動算出精確 kW 與建議市售機型。",
        },
      },
    ],
  },
  {
    slug: "ac-install-pitfalls",
    title: "冷氣安裝 10 大避坑指南與台灣現場加價行情：室外機、排水、管線與驗收",
    description:
      "冷氣三分靠機器，七分靠安裝！第一線安裝實務整理。室外機散熱空間、排水走管、洗洞抽真空、保固範圍與標準安裝額外加價收費標準，簽約必看。",
    category: "air-conditioner",
    keywords: ["冷氣安裝", "冷氣避坑", "冷氣施工", "冷氣加價行情", "室外機散熱", "抽真空", "銅管超長"],
    publishedAt: "2026-08-17",
    updatedAt: "2026-08-18",
    readingMinutes: 8,
    featured: true,
    relatedToolSlug: "ac-install-checklist",
    takeaways: [
      "大賣場標榜「標準安裝免費」，現場常因銅管超長、洗洞、鐵架追加 3,000~8,000 元，簽約前務必索取加價明細表。",
      "新冷媒 R32 / R410A 必須使用真空泵抽真空至少 15~20 分鐘，嚴禁師傅用冷媒排空偷工減料。",
      "室內機完工時必須當場注水 500cc~1000cc 進行排水測試，親眼確認牆面無滲漏水方可簽收。",
    ],
    verification: {
      levels: ["field-tested", "myth-busted"],
      specSource: "冷氣安裝甲乙級技術士標準作業規範與門市客訴實例",
      lastVerified: "2026-08-18",
      note: "整理自第一線施工爭議與原廠保固拒賠案例，購買前與安裝當日必看。",
    },
    sections: [
      {
        heading: "一、台灣冷氣標準安裝「額外收費行情速查表」",
        body: [
          "大賣場或電商隨機附贈的「標準安裝」通常僅含 5 米銅管、明管施工與一般電源插座。超出部分為現場額外收費，以下為台灣公會常態行情：",
        ],
        table: {
          headers: ["常見現場施工加價項目", "規格說明", "台灣常態收費行情 (新台幣)"],
          rows: [
            ["超出標準銅管 (2分3分管)", "適用 2.2kW ~ 3.6kW 機種", "約 $400 ～ $500 / 公尺"],
            ["超出標準銅管 (2分4分/2分5分)", "適用 4.1kW ~ 7.1kW 大機種", "約 $550 ～ $700 / 公尺"],
            ["室外機鍍鋅/不鏽鋼安裝架", "標準 A 架 / 豪華懸臂架", "約 $1,200 ～ $2,500 / 組"],
            ["RC 鋼筋水泥洗洞", "厚度 15~20cm 內，洗 1 洞", "約 $1,000 ～ $1,500 / 洞"],
            ["加裝微電腦排水泵浦", "適用排水管無法自然下斜處", "約 $1,800 ～ $2,500 / 台"],
            ["室外機危險施工費", "外牆懸掛無立足點 / 吊掛作業", "約 $1,500 ～ $4,000 (視危險度)"],
          ],
        },
      },
      {
        heading: "二、安裝當天的關鍵工法與監工重點",
        body: [
          "1. 抽真空時間確認：新冷媒對水分與空氣極度敏感。安裝完成後必須使用真空泵抽真空至少 15～20 分鐘，並靜置觀察壓力表是否回升，確保管路完全無漏氣與無水氣。",
          "2. 銅管喇叭口製作：銅管接頭處喇叭口若擴管不均或扭力板手鎖附力道不對，極易在使用 1～2 年後慢速漏冷媒。",
          "3. 排水防漏測試：完工後務必請師傅在室內機集水盤倒入 500cc～1000cc 清水，親眼確認水流從室外排水端順暢流出，室內機接縫與牆面無任何滲水。",
        ],
      },
    ],
  },
  {
    slug: "refrigerator-japanese-vs-french-door",
    title: "日系多門 vs 法式十字對開：蔬果室在中間好用嗎？台灣主婦熱門痛點對決",
    description:
      "日本原裝五六門（Panasonic/Hitachi/Mitsubishi）與歐美法式四門對開（LG/Samsung/Whirlpool）深度比較。解析蔬果室高度、自動製冰管路清潔、大湯鍋平放收納與廚房動線。",
    category: "refrigerator",
    keywords: ["日系多門冰箱", "法式對開冰箱", "蔬果室在中間", "自動製冰清潔", "冰箱收納", "日本原裝冰箱"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingMinutes: 7,
    featured: true,
    relatedToolSlug: "refrigerator-calculator",
    takeaways: [
      "常煮飯拿青菜葉菜：首選「蔬果室在中間」機種（如 Panasonic / Hitachi 特定系列），免頻繁彎腰蹲下。",
      "愛喝手搖、常開派對放整隻雞或大湯鍋：首選「法式十字對開」（上方寬幅無中梁，大體積食材隨意放）。",
      "注重衛生與防異味：日系多門具備「獨立製冰室 + 可拆洗給水管路」，冰塊完全不會吸附生肉海鮮臭味。",
      "都會小廚房寬度受限：日系多門具備窄身技術（60~65cm 寬即可做到 500L 大容量）。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "Panasonic、Hitachi、Mitsubishi Electric、LG 台灣官方技術手冊與展示機量測",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、日系多門 vs 法式對開 5 大核心維度對決",
        body: [
          "台灣家庭在選購高階冰箱時，最常陷入「日系窄身多門」與「大器法式十字門」的選擇困難：",
        ],
        table: {
          headers: ["評比項目", "日系五門 / 六門 (日本原裝)", "法式十字四門 (美韓系大寬幅)"],
          rows: [
            ["廚房寬度佔用", "窄身設計 (約 60~68.5cm)，空間利用極致", "機身較寬 (約 83~91cm)，需大廚房空間"],
            ["蔬果室位置", "多配置在『中層』或可自選，免彎腰好拿取", "通常在冷藏室最下方抽屜，拿重菜需微蹲"],
            ["自動製冰與防臭", "獨立獨立冰室，管路與濾網可全拆洗防發霉", "部分與冷凍室共用或整合於門冰水系統"],
            ["大鍋具/整盒蛋糕收納", "層板可折疊，但橫向寬度受限 (約 50~58cm)", "無中梁超寬大平層 (橫寬 70~80cm+)，大鍋直接進"],
            ["保鮮黑科技", "微凍結 (-3°C)、瞬冷凍、白金蔬果睡眠保鮮", "多重立體冷流、對稱分區溫控、敲敲門透視"],
          ],
        },
      },
      {
        heading: "二、自動製冰管路清潔（台灣消費者最容易忽略的衛生盲點）",
        body: [
          "台灣氣候潮濕炎熱，冰箱自動製冰機的「給水盒、供水管路、製冰盤」若無法拆卸清洗，容易滋生黑斑與水垢。",
          "日系三大品牌（Panasonic、Hitachi、Mitsubishi）目前皆已做到『全管路可拆洗』，供水幫浦與濾網可整組拆下沖洗，給家人喝冰水最安心。",
          "購買時請務必確認給水路徑是否標明『清潔可拆』，並定期每週清洗給水箱與更換淨水濾芯。",
        ],
      },
    ],
  },
  {
    slug: "refrigerator-costco-stocking-guide",
    title: "好市多大採購必看！大冷凍室冰箱挑選指南與保鮮黑科技實測",
    description:
      "愛買 Costco 牛排生鮮、冷凍水餃與炸物？傳統冰箱冷凍庫永遠塞不下。教你挑選冷凍佔比超過 35% 的大冷凍室冰箱，以及 -3°C 微凍結、瞬冷凍保鮮技術解析。",
    category: "refrigerator",
    keywords: ["Costco冰箱", "大冷凍冰箱", "好市多採買", "微凍結", "瞬冷凍", "生鮮保鮮"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingMinutes: 6,
    featured: false,
    relatedToolSlug: "refrigerator-calculator",
    takeaways: [
      "常去好市多採買者，冷凍庫容量建議至少 160L 以上（冷凍佔比需達 30%~38%）。",
      "-3°C 微凍結技術：生鮮肉品不用完全凍硬結冰，免解凍即可用菜刀輕鬆切片，營養血水不流失。",
      "急凍鋁盤（Rapid Freezing）：利用金屬高導熱快速通過冰晶生成帶，鎖住肉汁新鮮度。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "日本水產研究保鮮數據與各大品牌大冷凍室容量登錄表",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、好市多族群的「冷凍容量黃金比例」",
        body: [
          "傳統冰箱通常冷藏佔 75%、冷凍僅佔 25%。但如果你習慣每兩週去一次 Costco 採購牛小排、鮭魚切片、大包水餃與冷凍蔬菜，傳統冷凍庫一定會爆滿溢出。",
          "建議選擇「大冷凍比例機型」（如三菱電機會有超大冷凍室設計，或具備彈性變溫室可整格切換為冷凍的日系六門款式）。",
        ],
        table: {
          headers: ["採買頻率與生活型態", "建議總容量", "建議最低冷凍庫容量", "推薦配置"],
          rows: [
            ["平日外食，偶爾好市多買零食", "400L ～ 500L", "約 110L ～ 130L", "標準雙門 / 三門"],
            ["每月 1 次好市多大採購", "500L ～ 600L", "約 150L ～ 180L", "日系五門/六門大冷凍款"],
            ["每週 1 次好市多大量生鮮囤貨", "600L ～ 750L+", "約 200L ～ 260L+", "法式四門 / 專屬冷凍櫃搭配"],
          ],
        },
      },
    ],
  },
  {
    slug: "refrigerator-capacity-guide",
    title: "冰箱容量怎麼選？依家庭人數與生活習慣對照表（附尺寸進門避坑）",
    description:
      "2 人、4 人家庭該買幾公升冰箱？冷凍與冷藏比例怎麼抓？解析對開、上下門、多門款式容量與廚房散熱動線，附選購 Checklist。",
    category: "refrigerator",
    keywords: ["冰箱容量", "冰箱公升數", "冰箱推薦", "對開冰箱", "多門冰箱", "冰箱選購"],
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-18",
    readingMinutes: 6,
    featured: true,
    relatedToolSlug: "refrigerator-calculator",
    takeaways: [
      "基本容量計算公式：（同住人數 × 70L）+ 常備食材 70L + 預備彈性 70L。",
      "購買前丈量搬運動線：電梯門寬、大門寬度與走廊轉角需比冰箱本體寬度「多 5~10 公分以上」。",
      "左右散熱需留 2~5cm、上方需留 5~10cm，緊貼牆壁會導致耗電增加且壓縮機壽命減半。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "日系與歐美各大品牌型錄規格及家庭生活型態研究",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、冰箱容量標準公式：人數 × 70L + 常備 100L",
        body: [
          "業界通用基準公式：基本容量 =（同住人數 × 70 公升）+ 常備食材 70 公升 + 預備彈性空間 70 公升。",
          "單身獨居：150L ～ 250L（外食為主可選 150L，偶爾自煮建議 200L 以上）。",
          "2 人小家庭：300L ～ 450L（有在超市每週採買者建議 400L 以上）。",
          "3～4 人核心家庭：500L ～ 600L（備餐、冷凍食品、常備醬料充足）。",
          "5 人以上大家庭或常囤好市多：600L 以上多門或對開大型機種。",
        ],
      },
    ],
  },
  {
    slug: "inverter-vs-fixed-ac",
    title: "變頻冷氣 vs 定頻冷氣：省電差多少？2026 選購建議與迷思破解",
    description:
      "變頻冷氣真的比較省電嗎？從 CSPF 運作原理、使用時數、機器售價到長期電費，完整比較兩種冷氣優缺點與適合族群。",
    category: "air-conditioner",
    keywords: ["變頻冷氣", "定頻冷氣", "CSPF", "冷氣省電", "變頻定頻差別", "電費試算"],
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-18",
    readingMinutes: 7,
    featured: false,
    verification: {
      levels: ["spec-verified", "myth-busted"],
      specSource: "經濟部能源署 CSPF 能效標章資料庫與台電夏月電價級距",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、運作原理核心差異與電費計算",
        body: [
          "定頻冷氣：壓縮機只有「全速運轉」與「完全停止」兩種狀態。室溫降到目標溫度即停機，室溫回升 1～2°C 又重新全載啟動。頻繁啟動瞬間電流大、耗電高且室內溫差明顯。",
          "變頻冷氣：開機初期全速強力降溫，達到目標溫度後自動降為「超低轉速持續運轉」，維持恆溫。無頻繁重啟的高耗電，體感舒適度極佳。",
        ],
      },
    ],
  },
  {
    slug: "washing-machine-drum-vs-top",
    title: "滾筒洗衣機 vs 直立洗衣機：優缺點完整比較（洗淨力、耗水與烘衣需求）",
    description:
      "滾筒真的比較省水不傷衣？直立式真的洗比較乾淨？從洗淨原理、衣物磨損、洗程時間、洗脫烘一體到長期耗電，幫你選對洗衣機類型。",
    category: "washing-machine",
    keywords: ["滾筒洗衣機", "直立洗衣機", "洗衣機推薦", "洗脫烘一體", "熱泵乾衣機", "洗衣機比較"],
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-18",
    readingMinutes: 8,
    featured: true,
    relatedToolSlug: "washing-machine-calculator",
    takeaways: [
      "滾筒洗衣機：摔打式洗滌省水 50%、防衣物糾結磨損、可溫水洗滌，梅雨季選洗脫烘超方便。",
      "直立洗衣機：洗程快（35~45分）、可隨時開蓋加衣、價格親民、大水流適合泥沙髒污。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "經濟部水利署省水標章試驗數據與紡織品洗滌磨損研究",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、洗淨原理與衣物保護度比較",
        body: [
          "直立式洗衣機：靠底部迴轉盤帶動強烈水流互相搓揉。優點是水量充足、泥沙沖刷力強、洗程快速；缺點是衣物易打結拉扯。",
          "滾筒式洗衣機：模擬棒槌拍打，將衣物帶至高處自然落下摔打。優點是極度省水、衣物不糾結磨損極低，且支援溫水加熱洗滌溶解皮脂油垢。",
        ],
      },
    ],
  },
  {
    slug: "tv-size-distance-guide",
    title: "電視幾吋才適合？客廳觀看距離對照表（4K UHD 最佳視角計算）",
    description:
      "65 吋、75 吋電視要坐多遠？依國際 SMPTE 與 THX 視角黃金標準，解析 4K 電視距離公式與客廳深度，附防頭暈與沉浸感指南。",
    category: "tv",
    keywords: ["電視尺寸", "電視幾吋", "電視觀看距離", "65吋電視", "75吋電視", "4K電視距離"],
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-18",
    readingMinutes: 6,
    featured: true,
    relatedToolSlug: "tv-distance",
    takeaways: [
      "THX 4K 劇院沉浸視角 (40°)：沙發距離 2.0 公尺即可享受 65 吋震撼畫面，2.3 公尺適合 75 吋。",
      "客廳深度丈量時，請記得扣除沙發背枕與電視櫃厚度（共約 1.2~1.4 公尺），實際眼距才是關鍵。",
    ],
    verification: {
      levels: ["spec-verified", "field-tested"],
      specSource: "SMPTE（電影電視工程師協會）與 THX 劇院視野標準規範",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、國際標準視角與距離對照表",
        body: [
          "4K 時代像素密度極高，近距離觀看依然細緻純淨無顆粒，讓眼睛能享受更廣闊的視野沉浸感（FOV）。",
        ],
      },
    ],
  },
  {
    slug: "tv-oled-vs-qled",
    title: "OLED vs QLED vs Mini-LED 電視差在哪？2026 面板技術終極選購指南",
    description:
      "OLED 會烙印嗎？Mini-LED 亮度有多強？從黑位對比、HDR 峰值亮度、暗室觀影、客廳採光反光到遊戲 120Hz 規格全面深度評比。",
    category: "tv",
    keywords: ["OLED", "QLED", "Mini-LED", "電視面板", "HDR", "電視烙印", "電視推薦"],
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-18",
    readingMinutes: 7,
    featured: false,
    verification: {
      levels: ["spec-verified", "myth-busted"],
      specSource: "各大面板廠技術白皮書與 RTINGS 客觀量測數據",
      lastVerified: "2026-08-18",
    },
    sections: [
      {
        heading: "一、三大面板核心技術一覽",
        body: [
          "1. OLED：每個像素獨立自發光，純黑極致，視角廣無光暈，適合關燈看電影。",
          "2. Mini-LED：數千顆微型分區背光，峰值亮度高達 2000+ nits，白天客廳大採光首選，零烙印風險。",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}
