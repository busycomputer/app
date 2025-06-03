import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useFeatureAnimation = () => {
  const headingRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const featureBoxOneRef = useRef<HTMLDivElement>(null)
  const featureBoxTwoRef = useRef<HTMLDivElement>(null)
  const featureBoxThreeRef = useRef<HTMLDivElement>(null)
  const featureBoxFourRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const title = titleRef.current
      const heading = headingRef.current
      const container = containerRef.current
      const featureBoxOne = featureBoxOneRef.current
      const featureBoxTwo = featureBoxTwoRef.current
      const featureBoxThree = featureBoxThreeRef.current
      const featureBoxFour = featureBoxFourRef.current
      if (
        !title ||
        !heading ||
        !container ||
        !featureBoxOne ||
        !featureBoxTwo ||
        !featureBoxThree ||
        !featureBoxFour
      )
        return

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
      const tl = gsap.timeline()
      tl.add([headingTween, titleTween])

      // box animation
      const boxes = [featureBoxOne, featureBoxTwo, featureBoxThree, featureBoxFour]
      boxes.forEach((box, index) => {
        tl.add(
          gsap.fromTo(
            box,
            {
              y: 300,
              opacity: 0,
              ease: 'power2.in',
            },
            { y: 0, opacity: 1, ease: 'back.out', duration: 1.2, delay: 0.1 * index }
          ),
          0
        )
      })

      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        animation: tl,
      })
    },
    { scope: containerRef }
  )

  return {
    headingRef,
    titleRef,
    containerRef,
    featureBoxOneRef,
    featureBoxTwoRef,
    featureBoxThreeRef,
    featureBoxFourRef,
  }
}
