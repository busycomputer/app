import React from 'react'
import { geistSans as sans, geistMono as mono } from 'src/fonts'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(sans.variable, mono.variable, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
