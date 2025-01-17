import React from 'react'
import { metadata } from '@/app/metadata'
import { DotBackground } from '@/components/ui/dotted-background'

export { metadata }

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <DotBackground />
      {children}
    </div>
  )
}
