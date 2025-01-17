import React from 'react'
import { metadata } from '@/app/metadata'
import HomeNav from '@/components/navbar/home/home-nav'

export { metadata }

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HomeNav />
      {children}
    </>
  )
}
