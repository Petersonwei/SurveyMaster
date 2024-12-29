import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '澳洲職場人活動問卷系統',
  description: '跨州分類整合問卷系統',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}