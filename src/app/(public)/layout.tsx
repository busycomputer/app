import React from 'react'
import Image from 'next/image'
import ButtonContainer from '@/assets/icons/Buttons Container.svg'
import { metadata } from '@/app/metadata'
import Footer from '@/components/home/footer'
import Navbar from '@/components/navbar/navbar'
import SmoothScrollWrapper from '@/components/wrappers/SmoothScrollWrapper'

export { metadata }

// const space =
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-black">
      <SmoothScrollWrapper>
        <Navbar />
        {children}
        <Footer />
      </SmoothScrollWrapper>
    </div>
  )
}
