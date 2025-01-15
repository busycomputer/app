import React from 'react'
import { geist as font } from '@/app/fonts'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'

export { metadata }

export default function RootDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(font.variable, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <div className="flex-1 overflow-auto p-8">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
