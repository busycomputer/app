import React from 'react'
import '@/app/globals.css'
import { Toaster } from 'react-hot-toast'
import { Space_Mono, IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

export { metadata }

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: '400',
})

const plexSansMono = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans-plex',
  weight: '400',
})

const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

// @ts-ignore
export const space = localFont({
  src: './SpaceType-Regular.woff',
  variable: '--font-space',
  weight: '100 900',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          plexSansMono.variable,
          spaceMono.variable,
          space.variable,
          SpaceGrotesk.variable,
          'antialiased'
        )}
      >
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
