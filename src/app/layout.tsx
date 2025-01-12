import { geist as font } from '@/app/fonts'
import '@/app/globals.css'
import { Menu } from '@/components/menu'
import { cn } from '@/lib/utils'
import { metadata } from '@/app/metadata'

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(font.variable, 'antialiased')}>
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
      </body>
    </html>
  )
}
