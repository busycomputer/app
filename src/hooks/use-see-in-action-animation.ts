import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useSeeInActionAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const title = titleRef.current
      const heading = headingRef.current
      const video = videoRef.current

      if (!container || !title || !heading || !video) return

      //   heading animation
      const headingTween = gsap.fromTo(
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
      //   title animation
      const titleTween = gsap.fromTo(
        title,
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
          delay: 0.3,
        }
      )
      const videoTween = gsap.fromTo(video, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 })
      const tl = gsap.timeline()
      tl.add([headingTween, titleTween])
      tl.add(videoTween, 0.2)
      ScrollTrigger.create({
        trigger: container,
        start: 'top 50%',
        animation: tl,
      })
    },
    { scope: containerRef }
  )
  return {
    containerRef,
    titleRef,
    headingRef,
    videoRef,
  }
}
