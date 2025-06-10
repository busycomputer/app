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

      // Use GSAP's matchMedia for responsive animations
      const mm = gsap.matchMedia()

      // Desktop animations (screen width >= 700px)
      mm.add('(min-width: 700px)', () => {
        // Heading animation
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

        // Title animation
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

        // Box animations
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
              {
                y: 0,
                opacity: 1,
                ease: 'back.out',
                duration: 1.2,
                delay: 0.1 * index,
              }
            ),
            0
          )
        })

        ScrollTrigger.create({
          trigger: container,
          start: 'top 80%',
          animation: tl,
        })

        // Return cleanup function for this media query
        return () => {
          tl.kill()
        }
      })

      // Mobile (screen width < 700px) - no animations, just set final state
      mm.add('(max-width: 699px)', () => {
        // Set elements to their final visible state without animation
        gsap.set([heading, title, featureBoxOne, featureBoxTwo, featureBoxThree, featureBoxFour], {
          y: 0,
          opacity: 1,
          clearProps: 'all',
        })

        gsap.fromTo(
          heading,
          {
            y: 100,
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

        // Title animation
        gsap.fromTo(
          title,
          {
            y: 100,
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

        const boxes = [featureBoxOne, featureBoxTwo, featureBoxThree, featureBoxFour]

        boxes.forEach((box) => {
          // const tl = gsap.timeline(
          //   ScrollTrigger.create({
          //     trigger: box,
          //     start: 'top 50%',
          //     end: 'bottom 50%',
          //     scrub: true,
          //   })
          // )
          // tl.to(box,{
          //   scale:1.2,
          //   ease: 'back.inOut',
          //   // duration: 0.6
          // })
          // tl.to(box,{
          //   scale:1,
          //   ease:'back.inOut'
          // })
        })
        // select titles and give basic animation
        // select boxes ref and add scale animation using scroll trigger  use scrub thing so that "
        // we get scroll responsive animation

        // Return cleanup function
        return () => {
          // Cleanup if needed
        }
      })

      // Cleanup function to kill all matchMedia instances
      return () => {
        mm.kill()
      }
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
