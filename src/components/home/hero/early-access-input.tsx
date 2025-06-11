'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import TangledSideArrow from '@/components/svg/tangled-side-arrow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EarlyAccessInput() {
  const inputRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const inputBox = inputRef.current
    if (!inputBox) return
    gsap.fromTo(
      inputBox,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.3,
        duration: 0.4,
      }
    )
  })
  return (
    <div className="relative" ref={inputRef}>
      <div className="font-space-mono relative mb-[70px] mt-32 flex w-full flex-col gap-2 sm:mx-auto sm:mt-3 sm:h-[44px] sm:max-w-96 sm:flex-row sm:justify-center sm:gap-0 md:mt-5 lg:mt-11 lg:max-w-[450px]">
        <div className="absolute -top-14 left-14 -translate-x-[calc(100%-13px)] -translate-y-1/2 sm:left-0 sm:top-1/2 sm:-translate-x-[calc(100%-4px)] md:-translate-x-[calc(100%+6px)]">
          <TangledSideArrow className="h-24 w-24 rotate-90 stroke-[#3B3B45] sm:h-20 sm:w-20 sm:rotate-0 md:h-24 md:w-24" />
        </div>
        <Input
          placeholder="ENTER YOUR EMAIL ADDRESS"
          className="mr-0 h-[50px] w-full rounded-l-sm border border-white bg-white py-0 text-center text-[16px] text-sm font-bold tracking-widest text-primary placeholder:bg-white placeholder:text-center placeholder:font-thin sm:h-full sm:max-w-56 sm:rounded-r-none sm:px-6 sm:py-3 sm:text-left sm:placeholder:text-left sm:placeholder:text-xs md:max-w-64 lg:max-w-80 lg:py-4 lg:leading-[28px] lg:placeholder:tracking-widest xl:placeholder:text-[12px]"
        />
        <Button className="h-[50px] w-full rounded-r-[4px] tracking-widest hover:bg-primary sm:-ml-1 sm:h-full sm:rounded-l-none sm:text-xs sm:max-w-44 lg:max-w-[180px] lg:text-[12px]">
          GET EARLY ACCESS
        </Button>
      </div>
    </div>
  )
}
