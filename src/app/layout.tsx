import React from 'react'
import '@/app/globals.css'
import { Toaster } from 'react-hot-toast'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { geistSans as sans, geistMono as mono } from 'src/fonts'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

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
          <Toaster />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
