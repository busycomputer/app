'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Sparkle from './sparkle'
import { cn } from '@/lib/utils'

export default function HeroDescription({ className }: { className?: string }) {
  const bannerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const banner = bannerRef.current
    const heading = headingRef.current
    const text = textRef.current
    if (!banner || !heading || !text) return
    // const tl = gsap.timeline()
    gsap.fromTo(
      banner,
      {
        y: 50,
        opacity: 0,
        ease: 'sine.in',
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out',
        duration: 0.8,
      }
    )

    gsap.fromTo(
      heading,
      {
        y: 50,
        opacity: 0,
        ease: 'sine.in',
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out',
        duration: 0.8,
        delay: 0.2,
      }
    )
    gsap.fromTo(
      text,
      {
        y: 50,
        opacity: 0,
        ease: 'sine.in',
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out',
        duration: 1.2,
        delay: 0.4,
      }
    )
  })
  return (
    <div className={cn('mx-auto flex max-w-screen-xl flex-col items-center pt-36', className)}>
      <div
        ref={bannerRef}
        className="font-space-mono z-20 mr-auto flex max-w-96 shrink-0 items-center gap-3 overflow-hidden border-2 border-[#172b21] bg-[#06110C] px-1 py-1 text-xs font-light text-muted-foreground sm:mx-3 sm:px-2 sm:py-2 md:mb-3 md:text-sm lg:font-normal"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#131316] md:h-10 md:w-10">
          <Sparkle />
        </span>
        <p className="line-clamp-1 pr-3">AUTOMATE, OPTIMIZE, OWN YOUR STACK</p>
      </div>
      <div className="flex w-full max-w-xl flex-col items-center gap-4 md:max-w-3xl lg:max-w-[884px]">
        <div
          ref={headingRef}
          className="font-space z-20 pt-3 text-5xl sm:text-center sm:text-4xl md:pt-0 md:text-4xl lg:text-[62px] lg:leading-[4.5rem]"
        >
          BUILD AMAZING WORKFLOW AT WARPSEED
        </div>
        <div
          ref={textRef}
          className="font-space-mono z-20 w-full pr-8 text-xs uppercase text-muted-foreground sm:max-w-sm sm:pr-0 md:max-w-md md:text-center md:text-sm lg:max-w-[830px] lg:text-[16px] lg:leading-[1.5]"
        >
          Infrastructure that combines powerful AI, DeFi, and data scraping modules with a vibrant
          marketplace where creators can share and monetize their automated solutions
        </div>
      </div>
    </div>
  )
}
