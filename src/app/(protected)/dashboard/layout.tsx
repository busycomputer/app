import React from 'react'
import { metadata } from '@/app/metadata'

export { metadata }

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 overflow-auto p-8">{children}</div>
      </div>
    </>
  )
}
