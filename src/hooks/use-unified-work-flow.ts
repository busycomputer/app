import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { RefObject, useCallback, useEffect, useState, useRef } from 'react'
import { TPathDetails } from '@/components/home/hero/connection-node'

const debounce = <TFunc extends (...args: any[]) => any>(
  func: TFunc,
  wait: number
): ((...args: Parameters<TFunc>) => void) => {
  let timeout: NodeJS.Timeout | undefined
  return (...args: Parameters<TFunc>) => {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const initialPathValues = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  controlOffset: 0,
}

export const useUnifiedWorkFlow = ({
  boxOneRef,
  boxTwoRef,
  boxThreeRef,
  boxFourRef,
  groupRef,
  iconRef,
  svgPathOneRef,
  svgPathTwoRef,
  svgPathThreeRef,
}: {
  boxOneRef: RefObject<HTMLDivElement | null>
  boxTwoRef: RefObject<HTMLDivElement | null>
  boxThreeRef: RefObject<HTMLDivElement | null>
  boxFourRef: RefObject<HTMLDivElement | null>
  groupRef: RefObject<HTMLDivElement | null>
  iconRef: RefObject<SVGSVGElement | null>
  svgPathOneRef: RefObject<SVGSVGElement | null>
  svgPathTwoRef: RefObject<SVGSVGElement | null>
  svgPathThreeRef: RefObject<SVGSVGElement | null>
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [pathOne, setPathOne] = useState<TPathDetails>(initialPathValues)
  const [pathTwo, setPathTwo] = useState<TPathDetails>(initialPathValues)
  const [pathThree, setPathThree] = useState<TPathDetails>(initialPathValues)
  const [updateKey, setUpdateKey] = useState(0)

  // Store timeline references
  const timelinesRef = useRef<{
    boxAndSvgTimeLine?: gsap.core.Timeline
    handIconTimeLine?: gsap.core.Timeline
  }>({})

  // Combined update function for paths and positions
  const updateLayoutAndAnimation = useCallback(() => {
    const currentIsMobile = window.innerWidth < 768
    setIsMobile(currentIsMobile)

    if (
      boxOneRef.current &&
      boxTwoRef.current &&
      boxThreeRef.current &&
      boxFourRef.current &&
      groupRef.current
    ) {
      const rect1 = boxOneRef.current.getBoundingClientRect()
      const rect2 = boxTwoRef.current.getBoundingClientRect()
      const rect3 = boxThreeRef.current.getBoundingClientRect()
      const rect4 = boxFourRef.current.getBoundingClientRect()
      const rectGroup = groupRef.current.getBoundingClientRect()

      // Update paths
      const x1_1 = rect1.width
      const y1_1 = rect1.y - rectGroup.y + rect1.height / 2
      const x2_1 = rect2.x - rect1.x
      const y2_1 = rect2.y - rectGroup.y + rect2.height / 2
      const dx1 = rect2.left - rect1.right
      const controlOffset1 = dx1 / 2
      setPathOne({ x1: x1_1, x2: x2_1, y1: y1_1, y2: y2_1, controlOffset: controlOffset1 })

      // Path Two logic
      let x1_2, y1_2, x2_2, y2_2, controlOffset2
      if (currentIsMobile) {
        x1_2 = rect2.x - rect1.x
        y1_2 = rect2.y - rectGroup.y + rect2.height / 2
        x2_2 = rect3.x - rectGroup.x + rect3.width
        y2_2 = rect3.y - rectGroup.y + rect3.height / 2
        controlOffset2 = 0
      } else {
        x1_2 = rect2.x - rectGroup.x + rect2.width
        y1_2 = rect2.y - rectGroup.y + rect2.height / 2
        x2_2 = rect3.x - rectGroup.x
        y2_2 = rect3.y - rectGroup.y + rect3.height / 2
        const dx2_desktop = rect3.left - rect2.right
        controlOffset2 = dx2_desktop / 2
      }
      setPathTwo({ x1: x1_2, x2: x2_2, y1: y1_2, y2: y2_2, controlOffset: controlOffset2 })

      // Path Three
      const x1_3 = rect3.x - rectGroup.x + rect3.width
      const y1_3 = rect3.y - rectGroup.y + rect3.height / 2
      const x2_3 = rect4.x - rectGroup.x
      const y2_3 = rect4.y - rectGroup.y + rect4.height / 2
      const dx3 = rect4.left - rect3.right
      const controlOffset3 = dx3 / 2
      setPathThree({ x1: x1_3, x2: x2_3, y1: y1_3, y2: y2_3, controlOffset: controlOffset3 })

      // Trigger animation update
      setUpdateKey((prev) => prev + 1)
    }
  }, [boxOneRef, boxTwoRef, boxThreeRef, boxFourRef, groupRef])

  // Debounced resize handler
  const debouncedUpdate = useCallback(debounce(updateLayoutAndAnimation, 150), [
    updateLayoutAndAnimation,
  ])

  // Setup resize listener
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 // or your preferred breakpoint

    if (!isMobile) {
      updateLayoutAndAnimation() // Initial calculation
      window.addEventListener('resize', debouncedUpdate)
      return () => window.removeEventListener('resize', debouncedUpdate)
    } else {
      updateLayoutAndAnimation() // Still run initial calculation on mobile
    }
  }, [updateLayoutAndAnimation, debouncedUpdate])
  // Cleanup function to kill all animations and reset states
  const cleanupAnimations = useCallback(() => {
    const icon = iconRef.current
    const boxRefs = [
      boxOneRef.current,
      boxTwoRef.current,
      boxThreeRef.current,
      boxFourRef.current,
    ].filter(Boolean)
    const svgRefs = [svgPathOneRef.current, svgPathTwoRef.current, svgPathThreeRef.current].filter(
      Boolean
    )

    // Kill existing timelines
    if (timelinesRef.current.boxAndSvgTimeLine) {
      timelinesRef.current.boxAndSvgTimeLine.kill()
      timelinesRef.current.boxAndSvgTimeLine = undefined
    }
    if (timelinesRef.current.handIconTimeLine) {
      timelinesRef.current.handIconTimeLine.kill()
      timelinesRef.current.handIconTimeLine = undefined
    }

    // Kill all tweens on elements
    if (icon) gsap.killTweensOf(icon)
    if (boxRefs.length) gsap.killTweensOf(boxRefs)

    // Reset SVG paths
    svgRefs.forEach((svg) => {
      if (svg) {
        const paths = svg.querySelectorAll('path')
        gsap.killTweensOf(paths)
        gsap.set(paths, {
          drawSVG: '0%',
          strokeDasharray: 'none',
          strokeDashoffset: 0,
        })
      }
    })

    // Reset box scales
    boxRefs.forEach((box) => {
      if (box) {
        gsap.set(box, { scale: 1 })
      }
    })

    // Reset icon
    if (icon) {
      gsap.set(icon, {
        x: 0,
        y: 0,
        scale: 1,
        display: 'none',
        position: 'absolute',
        zIndex: 100,
      })
    }
  }, [
    boxOneRef,
    boxTwoRef,
    boxThreeRef,
    boxFourRef,
    iconRef,
    svgPathOneRef,
    svgPathTwoRef,
    svgPathThreeRef,
  ])

  // Animation logic
  useGSAP(
    () => {
      const icon = iconRef.current
      const boxOne = boxOneRef.current
      const boxTwo = boxTwoRef.current
      const boxThree = boxThreeRef.current
      const boxFour = boxFourRef.current
      const group = groupRef.current
      const svgPathOne = svgPathOneRef.current
      const svgPathTwo = svgPathTwoRef.current
      const svgPathThree = svgPathThreeRef.current

      if (
        !icon ||
        !boxOne ||
        !boxTwo ||
        !boxThree ||
        !boxFour ||
        !group ||
        !svgPathOne ||
        !svgPathTwo ||
        !svgPathThree
      ) {
        return
      }

      // Clean up before starting new animations
      cleanupAnimations()

      const boxRefs = [boxOne, boxTwo, boxThree, boxFour]
      const groupRect = group.getBoundingClientRect()

      const boxes = [boxOne, boxTwo, boxThree, boxFour]

      // Create new timelines
      const boxAndSvgTimeLine = gsap.timeline()
      const handIconTimeLine = gsap.timeline({ repeat: -1, repeatDelay: 0.8, delay: 5 })

      // Store timeline references
      timelinesRef.current.boxAndSvgTimeLine = boxAndSvgTimeLine
      timelinesRef.current.handIconTimeLine = handIconTimeLine

      // Initial box in-animation
      boxAndSvgTimeLine.fromTo(
        [boxes],
        { opacity: 0 },
        { opacity: 1, stagger: 0.3, ease: 'power1.inOut' }
      )

      // Collecting svg line data
      const allPaths = [
        svgPathOne.querySelectorAll('path'),
        svgPathTwo.querySelectorAll('path'),
        svgPathThree.querySelectorAll('path'),
      ]

      // Reset SVG paths before animating
      allPaths.forEach((pathGroup) => {
        gsap.set(pathGroup, { drawSVG: '0%', strokeDasharray: 'none', strokeDashoffset: 0 })
      })

      // Svg line draw animation
      allPaths.forEach((pathGroup) => {
        boxAndSvgTimeLine.fromTo(pathGroup, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1 })
      })

      // Svg line flowing-loop animation
      boxAndSvgTimeLine.set(allPaths, { strokeDasharray: '10,2' }).to(allPaths, {
        strokeDashoffset: -24,
        repeat: -1,
        duration: 0.6,
        ease: 'none',
      })

      // Calculate fresh box positions
      const positions = boxRefs.map((box) => {
        const boxRect = box.getBoundingClientRect()
        return {
          x: boxRect.left - groupRect.left + boxRect.width / 2 - (isMobile ? 20 : 50),
          y: boxRect.top - groupRect.top + boxRect.height / 2 - (isMobile ? 0 : -30),
        }
      })

      // Set initial icon location
      handIconTimeLine.set(icon, {
        position: 'absolute',
        x: positions[0].x,
        y: positions[0].y,
        scale: 1,
        display: 'block',
        ease: 'power1',
      })

      positions.forEach((pos, index) => {
        if (index === 0) return
        handIconTimeLine
          .to(icon, {
            x: pos.x,
            y: pos.y,
            zIndex: 100,
            duration: isMobile ? 0.8 : 1,
            ease: 'power2.inOut',
            onStart: () => {
              gsap.to(boxRefs[index], {
                scale: isMobile ? 1.1 : 1.2,
                duration: 0.8,
                ease: 'sine.in',
              })
            },
            onComplete: () => {
              gsap.to(boxRefs[index], {
                scale: 1,
                delay: 0.9,
                duration: 1,
                ease: 'sine.out',
              })
            },
          })
          .to(icon, { duration: 0.8 })
      })

      // Return to start
      handIconTimeLine.to(icon, {
        x: positions[0].x,
        y: positions[0].y,
        duration: isMobile ? 0.8 : 1,
        ease: 'power2.inOut',
        onStart: () => {
          gsap.to(boxRefs[0], { scale: isMobile ? 1.1 : 1.2, duration: 1, ease: 'sine.in' })
        },
        onComplete: () => {
          gsap.to(boxRefs[0], { scale: 1, duration: 1, ease: 'sine.out', delay: 0.9 })
        },
      })

      return () => {
        cleanupAnimations()
      }
    },
    { dependencies: [updateKey, isMobile, pathOne, pathTwo, pathThree, cleanupAnimations] }
  )

  return {
    pathOne,
    pathTwo,
    pathThree,
  }
}
