import { Category } from './types'

export const categories: Category[] = [
  {
    id: 'general-info',
    title: 'General Event Information', 
    description: '提供活動背景與參與者參加方式',
    stateOptions: [
      {
        state: 'BNE',
        description: '提供活動背景與參與者參加方式',
        example: `活動名稱：2024 August - ACF 布村職場人版聚報名表
活動背景介紹：
- 時間：2024年8月10日（星期六）11:30 - 14:30
- 地點：The West End Markets
- 費用：免費
- 餐飲：建議自備野餐墊、自帶食物或於市集購買午餐

活動流程：
- 11:30 開放報到
- 11:30-12:45 午餐時間 + 自由交談
- 12:45-13:00 大合照
- 13:00-14:30 小組分組聊天及活動結束`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動背景介紹'
          },
          {
            id: 'event-schedule',
            type: 'text',
            title: '活動流程'
          }
        ]
      },
      {
        state: 'PERTH',
        description: '提供活動的基本資訊及目的，讓參加者了解活動內容',
        example: `活動名稱：澳洲職場人 - PERTH 版聚 15th Jun 2024

活動介紹（中文）：
伯斯在重新啟航後的第一個版聚，旨在擴大人脈並分享職場與生活經驗。
活動特色包括端午節慶祝及彼此交流的機會。

活動介紹（英文）：
A restart for Perth Australia Career Forum, focusing on networking and celebrating the Dragon Boat Festival.

報名截止日期：2024年5月31日或額滿40人為止

活動細節：
- 時間：10:00 - 13:00
- 地點：23 Paterson st. Como 6152 WA
- 費用：Gold Coin Donation
- 聯絡人：Robin - 0426 960 860`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-intro-zh',
            type: 'text',
            title: '活動介紹 (中文)'
          },
          {
            id: 'event-intro-en',
            type: 'text',
            title: '活動介紹 (英文)'
          },
          {
            id: 'registration-deadline',
            type: 'text',
            title: '報名截止日期'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動細節'
          }
        ]
      },
      {
        state: 'TAS',
        description: '提供參加者活動背景及詳細資訊',
        example: `活動名稱：2024 Sept - ACF 塔斯職場人野餐BBQ版聚及學生迎新報名表

活動介紹：
塔州活動重啟，旨在促進職場華人的交流，並結合野餐和端午節氛圍。

活動細節：
- 時間：2024年9月28日（星期六）11:00 - 14:30
- 地點：Long Beach Rotunda
- 費用：免費
- 餐飲：建議自帶食物或提前在附近餐廳購買

活動流程：
- 11:00 開放報到
- 11:30 - 12:45 午餐時間 + 自由交談
- 12:45 - 13:00 大合照
- 13:00 - 14:30 小組分組聊天及活動結束

聯絡方式：
- 塔斯荷巴特版主 Chris (Email: chris@australiacareerforum.com)
- 公關組員 Amber (Email: amber@australiacareerforum.com, CC Chris)`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-intro',
            type: 'text',
            title: '活動介紹'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動細節'
          },
          {
            id: 'event-schedule',
            type: 'text',
            title: '活動流程'
          },
          {
            id: 'contact-info',
            type: 'text',
            title: '聯絡方式'
          }
        ]
      },
      {
        state: 'MEL',
        description: '提供活動基本資訊，方便參加者了解活動細節',
        example: `活動名稱：2024.07.13 墨爾本職場人版聚 - BOFY Party!

活動背景：
本次活動在 Hijinx Hotel 舉行，旨在促進參加者互動並拓展人脈，加入遊戲環節以提升活動趣味性。

活動細節：
- 日期：7月13日（六）
- 時間：11:00 - 14:00（遊戲 11:30 開始）
- 地點：Hijinx Hotel Chadstone（The Social Quarter）
- 費用：
  - 一般會員 $50
  - 正式會員 $40
- 飲食：提供 Pizza、Chips 和 Drinks
- 服裝要求：休閒裝，避免高跟鞋

注意事項：
- 遊戲準時開始，遲到者無法參加遊戲環節
- 場地為 Adults only
- 報名完成後恕無法退費，可自行轉讓名額

聯絡方式：
- Facebook: 呂星儀
- Line: Star Lu
- Email: star@australiacareerforum.com`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-background',
            type: 'text',
            title: '活動背景'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動細節'
          },
          {
            id: 'important-notes',
            type: 'text',
            title: '注意事項'
          },
          {
            id: 'contact-info',
            type: 'text',
            title: '聯絡方式'
          }
        ]
      },
      {
        state: 'ADE',
        description: '提供參加者活動背景及詳細資訊',
        example: `活動名稱：澳洲職場人 - 年末南澳版聚 7th Dec 2024

活動介紹：
- 目的：分享學習成果、交流職場經驗、激發新一年的靈感
- 邀請參加者分享目標、推薦書籍或課程，以及職場故事

活動細節：
- 時間：2024年12月7日（星期六）12:00 - 15:30
- 地點：Caledonian Hotel
- 費用：付費會員 $30 / 非會員 $35（含餐費）
- 報名截止日期：2024年12月1日

聯絡方式：
Email: mandy@australiacareerforum.com`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-intro',
            type: 'text',
            title: '活動介紹'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動細節'
          },
          {
            id: 'contact-info',
            type: 'text',
            title: '聯絡方式'
          }
        ]
      },
      {
        state: 'SYD',
        description: '提供參加者活動的背景與細節',
        example: `活動名稱：澳洲職場人 - Sydney 版聚 30th November 2024

活動背景：
- 這是第四次也是今年最後一次雪梨版聚，聚焦在「產業趨勢」「職涯規劃」「工作技能提升」
- 邀請多位嘉賓分享職場經驗（Teacher Angela、Financial Planning的Justin等）

活動詳情：
- 時間：2024年11月30日（星期六）1 pm - 4 pm
- 地點：ACPE Campus - 10 Parkview Dr, Sydney Olympic Park NSW 2127
- 自備：餐點與飲料
- 活動流程：
  - 12:50 開放報到
  - 13:00 - 14:00 午餐 + 自由交談
  - 14:00 - 16:00 分享會
  - 16:00 - 16:50 自由交談
  - 17:00 場地歸還
- 費用：
  - 會員：免費
  - 非會員：$10

聯絡方式：
- Christina: christina@australiacareerforum.com
- Kenneth: kenneth@australiacareerforum.com`,
        questions: [
          {
            id: 'event-name',
            type: 'text',
            title: '活動名稱'
          },
          {
            id: 'event-background',
            type: 'text',
            title: '活動背景'
          },
          {
            id: 'event-details',
            type: 'text',
            title: '活動詳情'
          },
          {
            id: 'contact-info',
            type: 'text',
            title: '聯絡方式'
          }
        ]
      }
    ]
  },
  {
    id: 'personal-info',
    title: 'Personal Information',
    description: '確認參與者的身份，安排分組及核對資料',
    stateOptions: [
      {
        state: 'BNE',
        description: '確認參與者的身份，安排分組及核對資料',
        example: `希望如何稱呼你/妳/您? Your preferred name?: John
性別 Gender: 男 Male
請問年齡？How old are you?: 25-32
聯絡電話 Contact number?: 0412345678
請問您的會員是? What is your membership(s)?: Free member of Australia Career Forum 澳洲職場人免費會員`,
        questions: [
          {
            id: 'preferred-name',
            type: 'text',
            title: '希望如何稱呼你/妳/您? Your preferred name?'
          },
          {
            id: 'gender',
            type: 'radio',
            title: '性別 Gender',
            options: ['男 Male', '女 Female', 'Other']
          },
          {
            id: 'age',
            type: 'select',
            title: '請問年齡？How old are you?',
            options: [
              '未滿18歲 (under 18)',
              '18-24',
              '25-32',
              '33-39',
              '40-49',
              '50歲以上 (50 and above)'
            ]
          },
          {
            id: 'contact',
            type: 'text',
            title: '聯絡電話 Contact number?'
          },
          {
            id: 'membership',
            type: 'radio',
            title: '請問您的會員是? What is your membership(s)?',
            options: [
              'Paid member of Australia Career Forum 澳洲職場人付費會員',
              'Free member of Australia Career Forum 澳洲職場人免費會員'
            ]
          }
        ]
      },
      {
        state: 'PERTH',
        description: '收集基本資料以確認報名者身份及需求',
        example: `Email: john.doe@email.com
ACF Member 職場人會員號碼（非會員請填「X」）: X
Full Name 姓名: John Doe
Preferred Name 希望稱呼的名字: John
Contact Info 聯絡電話: 0412345678`,
        questions: [
          {
            id: 'email',
            type: 'text',
            title: 'Email'
          },
          {
            id: 'acf-member',
            type: 'text',
            title: 'ACF Member 職場人會員號碼（非會員請填「X」）'
          },
          {
            id: 'full-name',
            type: 'text',
            title: 'Full Name 姓名'
          },
          {
            id: 'preferred-name',
            type: 'text',
            title: 'Preferred Name 希望稱呼的名字'
          },
          {
            id: 'contact',
            type: 'text',
            title: 'Contact Info 聯絡電話'
          }
        ]
      },
      {
        state: 'TAS',
        description: '核對身份並收集活動所需的基本資料',
        example: `希望如何稱呼你/妳/您? Your preferred name?: Jane
性別 Gender: 女 Female
請問年齡？How old are you?: 25-32
是否願意擔任活動小幫手? Would like to be an event volunteer?: Yes
聯絡電話 Contact number?: 0412345678
Line ID (若希望以Line通知，可填寫): jane_line`,
        questions: [
          {
            id: 'preferred-name',
            type: 'text',
            title: '希望如何稱呼你/妳/您? Your preferred name?'
          },
          {
            id: 'gender',
            type: 'radio',
            title: '性別 Gender',
            options: ['男 Male', '女 Female', 'Other']
          },
          {
            id: 'age',
            type: 'select',
            title: '請問年齡？How old are you?',
            options: [
              '未滿18歲 (under 18)',
              '18-24',
              '25-32',
              '33-39',
              '40-49',
              '50歲以上 (50 and above)'
            ]
          },
          {
            id: 'volunteer',
            type: 'radio',
            title: '是否願意擔任活動小幫手? Would like to be an event volunteer?',
            options: ['Yes', 'No', 'Other']
          },
          {
            id: 'contact',
            type: 'text',
            title: '聯絡電話 Contact number?'
          },
          {
            id: 'line',
            type: 'text',
            title: 'Line ID (若希望以Line通知，可填寫)'
          }
        ]
      },
      {
        state: 'MEL',
        description: '確認參加者身份並進行活動安排',
        example: `Email: sarah@email.com
Preferred Name: Sarah
目前從事的職業或科系: Software Engineer
請問你來到墨爾本多久了？: 三年內`,
        questions: [
          {
            id: 'email',
            type: 'text',
            title: 'Email'
          },
          {
            id: 'preferred-name',
            type: 'text',
            title: 'Preferred Name'
          },
          {
            id: 'occupation',
            type: 'text',
            title: '目前從事的職業或科系'
          },
          {
            id: 'time-in-mel',
            type: 'select',
            title: '請問你來到墨爾本多久了？',
            options: [
              '一年內',
              '三年內',
              '五年內',
              '七年內',
              '九年內',
              '超過九年（墨爾本人）'
            ]
          }
        ]
      },
      {
        state: 'ADE',
        description: '核對參加者身份並進行活動安排',
        example: `Email: michael@email.com
希望如何稱呼你/妳/您? Your preferred name?: Michael
性別 Gender: 男 Male
請問年齡？How old are you?: 33-39
聯絡電話 Contact number?: 0412345678
餐飲需求: 素食
請問您的會員是?: Paid member of Australia Career Forum`,
        questions: [
          {
            id: 'email',
            type: 'text',
            title: 'Email'
          },
          {
            id: 'preferred-name',
            type: 'text',
            title: '希望如何稱呼你/妳/您? Your preferred name?'
          },
          {
            id: 'gender',
            type: 'radio',
            title: '性別 Gender',
            options: ['男 Male', '女 Female', 'Other']
          },
          {
            id: 'age',
            type: 'select',
            title: '請問年齡？How old are you?',
            options: [
              '未滿18歲 (under 18)',
              '18-24',
              '25-32',
              '33-39',
              '40-49',
              '50歲以上 (50 and above)'
            ]
          },
          {
            id: 'contact',
            type: 'text',
            title: '聯絡電話 Contact number?'
          },
          {
            id: 'dietary',
            type: 'text',
            title: '餐飲需求'
          },
          {
            id: 'membership',
            type: 'radio',
            title: '請問您的會員是?',
            options: [
              'Paid member of Australia Career Forum',
              'Free member of Australia Career Forum'
            ]
          }
        ]
      },
      {
        state: 'SYD',
        description: '核對參加者身份並進行活動安排',
        example: `Full Name 姓名 (請與匯款帳戶同名): David Chen
Preferred Name 現場如何稱呼您？: David
請問年齡？How old are you?: 26-34
Contact Info (Phone): 0412345678`,
        questions: [
          {
            id: 'full-name',
            type: 'text',
            title: 'Full Name 姓名 (請與匯款帳戶同名)'
          },
          {
            id: 'preferred-name',
            type: 'text',
            title: 'Preferred Name 現場如何稱呼您？'
          },
          {
            id: 'age',
            type: 'select',
            title: '請問年齡？How old are you?',
            options: [
              '17-22',
              '22-25',
              '26-34',
              '35-42',
              '43-50',
              '50+'
            ]
          },
          {
            id: 'contact',
            type: 'text',
            title: 'Contact Info (Phone)'
          }
        ]
      }
    ]
  }
]
