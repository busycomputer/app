import { geist as font } from '@/app/fonts'
import '@/app/globals.css'
import { Menu } from '@/components/menu'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'
import { ThemeProvider } from '@/components/providers/theme-providers'
import HomeNav from '@/components/navbar/home/home-nav'

export { metadata }

export default function RootHomeLayout({
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
          <HomeNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
