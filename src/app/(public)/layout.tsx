import React from 'react'
import ButtonContainer from '@/assets/icons/Buttons Container.svg'
import { metadata } from '@/app/metadata'
import Image from 'next/image'
import Footer from '@/components/home/footer'
import Navbar from '@/components/navbar/navbar'

export { metadata }

// const space = 
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-black">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
