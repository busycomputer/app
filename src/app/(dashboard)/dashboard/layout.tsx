import { geist as font } from '@/app/fonts'
import '@/app/globals.css'
import { Menu } from '@/components/menu'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'

export { metadata }

import React from 'react'

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
            {/* Sidebar */}
            <div className="w-64 shadow-md">
              <div className="p-4">
                <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
                <Menu />
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 overflow-auto p-8">{children}</div>
          </div>
        </ThemeProvider>{' '}
      </body>
    </html>
  )
}
