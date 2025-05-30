'use client'

import { Ref, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import path from 'path'
import { ConnectionNode, TPathDetails } from '../hero/connection-node'
import HandIcon from '@/components/svg/hand-icon'

export default function WorkFlowSection() {
  const [isMobile, setIsMobile] = useState(false)
  const boxOneRef = useRef<HTMLDivElement>(null)
  const boxTwoRef = useRef<HTMLDivElement>(null)
  const boxThreeRef = useRef<HTMLDivElement>(null)
  const boxFourRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<SVGSVGElement>(null)
  const svgPathOneRef = useRef<SVGSVGElement>(null)
  const svgPathTwoRef = useRef<SVGSVGElement>(null)
  const svgPathThreeRef = useRef<SVGSVGElement>(null)

  const groupRef = useRef<HTMLDivElement>(null)

  const initialPathValues = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    controlOffset: 0,
  }
  const [pathOne, setPathOne] = useState<TPathDetails>(initialPathValues)
  const [pathTwo, setPathTwo] = useState<TPathDetails>(initialPathValues)
  const [pathThree, setPathThree] = useState<TPathDetails>(initialPathValues)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }

    function updatePath() {
      const isMobile = window.innerWidth < 768

      if (
        boxOneRef.current &&
        boxTwoRef.current &&
        groupRef.current &&
        boxThreeRef.current &&
        boxFourRef.current
      ) {
        const rect1 = boxOneRef.current.getBoundingClientRect()
        const rect2 = boxTwoRef.current.getBoundingClientRect()
        const rect3 = boxThreeRef.current.getBoundingClientRect()
        const rect4 = boxFourRef.current.getBoundingClientRect()
        const rectGroup = groupRef.current.getBoundingClientRect()

        // Path One: Box 1 to Box 2
        const x1_1 = rect1.width
        const y1_1 = rect1.y - rectGroup.y + rect1.height / 2 // Center of box 1
        const x2_1 = rect2.x - rect1.x
        const y2_1 = rect2.y - rectGroup.y + rect2.height / 2 // Center of box 2
        const dx1 = rect2.left - rect1.right
        const controlOffset1 = dx1 / 2
        setPathOne({ x1: x1_1, x2: x2_1, y1: y1_1, y2: y2_1, controlOffset: controlOffset1 })

        // Path Two: Box 2 to Box 3
        let x1_2, y1_2, x2_2, y2_2, controlOffset2

        if (isMobile) {
          // On mobile: connect from left side of box 2 to right side of box 3
          x1_2 = rect2.x - rectGroup.x - 20 // Left side of box 2
          y1_2 = rect2.y - rectGroup.y + rect2.height / 2 // 5px below center of box 2
          x2_2 = rect3.x - rectGroup.x + rect3.width + 20 // Right side of box 3
          y2_2 = rect3.y - rectGroup.y + rect3.height / 2
          const dx2_mobile = Math.abs(x2_2 - x1_2)
          controlOffset2 = dx2_mobile / 2
        } else {
          // On desktop: connect from right side of box 2 to left side of box 3
          x1_2 = rect2.x - rectGroup.x + rect2.width
          y1_2 = rect2.y - rectGroup.y + rect2.height / 2 // 5px below center of box 2
          x2_2 = rect3.x - rectGroup.x
          y2_2 = rect3.y - rectGroup.y + rect3.height / 2
          const dx2_desktop = rect3.left - rect2.right
          controlOffset2 = dx2_desktop / 2
        }

        setPathTwo({ x1: x1_2, x2: x2_2, y1: y1_2, y2: y2_2, controlOffset: controlOffset2 })

        // Path Three: Box 3 to Box 4
        const x1_3 = rect3.x - rectGroup.x + rect3.width
        const y1_3 = rect3.y - rectGroup.y + rect3.height / 2 // Center of box 1
        const x2_3 = rect4.x - rectGroup.x
        const y2_3 = rect4.y - rectGroup.y + rect4.height / 2 // Center of box 4
        const dx3 = rect4.left - rect3.right
        const controlOffset3 = dx3 / 2
        setPathThree({ x1: x1_3, x2: x2_3, y1: y1_3, y2: y2_3, controlOffset: controlOffset3 })
      }
    }

    // function updateAnimation() {}
    updatePath()

    window.addEventListener('resize', updatePath)
    // window.addEventListener('scroll', updateAnimation)

    return () => {
      window.removeEventListener('resize', updatePath)
      // window.removeEventListener('scroll', updateAnimation)
    }
  }, [])

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
      const boxRefs = [boxOne, boxTwo, boxThree, boxFour]

      // Get positions relative to the group container
      const groupRect = group.getBoundingClientRect()
      const boxOneRect = boxOne.getBoundingClientRect()
      const boxTwoRect = boxTwo.getBoundingClientRect()
      const boxThreeRect = boxThree.getBoundingClientRect()
      const boxFourRect = boxFour.getBoundingClientRect()

      // Calculate center positions of each box relative to the group
      const positions = [
        {
          x: boxOneRect.left - groupRect.left + boxOneRect.width / 2 - (isMobile ? 60 : 130), // -12 to center the icon
          y: boxOneRect.top - groupRect.top + boxOneRect.height / 2 - (isMobile ? -10 : 0),
        },
        {
          x: boxTwoRect.left - groupRect.left + boxTwoRect.width / 2 - (isMobile ? 60 : 130),
          y: boxTwoRect.top - groupRect.top + boxTwoRect.height / 2 - (isMobile ? -10 : 0),
        },
        {
          x: boxThreeRect.left - groupRect.left + boxThreeRect.width / 2 - (isMobile ? 60 : 130),
          y: boxThreeRect.top - groupRect.top + boxThreeRect.height / 2 - (isMobile ? -10 : 0),
        },
        {
          x: boxFourRect.left - groupRect.left + boxFourRect.width / 2 - (isMobile ? 60 : 130),
          y: boxFourRect.top - groupRect.top + boxFourRect.height / 2 - (isMobile ? -10 : 0),
        },
      ]

      // Set initial position
      gsap.set(icon, {
        position: 'absolute',
        x: positions[0].x,
        y: positions[0].y,
        scale: 1,
      })

      // Create the animation timeline
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })

      // Animate through each position
      positions.forEach((pos, index) => {
        if (index === 0) return
        tl.to(icon, {
          x: pos.x,
          y: pos.y,
          zIndex: 100,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(boxRefs[index], {
              scale: 1,
              // delay: 0.3,
              duration: 1,
              ease: 'sine.out',
            })
          },
          onStart: () => {
            gsap.to(boxRefs[index], {
              scale: 1.2,
              // delay: 0.3,
              duration: 1,
              ease: 'sine.in',
            })
          },
        }).to(icon, {
          duration: 0.8, // Pause at each box
        })
      })

      // Return to first position to complete the loop
      tl.to(icon, {
        x: positions[0].x,
        y: positions[0].y,
        duration: 1,
        ease: 'power2.inOut',
        onStart: () => {
          gsap.to(boxRefs[0], {
            scale: 1.2,
            duration: 1,
            ease: 'sine.in',
          })
        },
        onComplete: () => {
          gsap.to(boxRefs[0], {
            scale: 1,
            duration: 1,
            ease: 'sine.out',
          })
        },
      })

      const PathTimeLine = gsap.timeline()

      // const svgPathRefs = [svgPathOne, svgPathTwo, svgPathThree]

      const selectedPathOne = svgPathOne.querySelectorAll('path')
      const selectedPathTwo = svgPathTwo.querySelectorAll('path')
      const selectedPathThree = svgPathThree.querySelectorAll('path')

      const svgPaths = [selectedPathOne, selectedPathTwo, selectedPathThree]

      svgPaths.forEach((path, index) => {
        PathTimeLine.fromTo(
          svgPaths[index],
          {
            drawSVG: '0%',
          },
          {
            drawSVG: '100%',
          }
        )
      })

      PathTimeLine.set(svgPaths, { strokeDasharray: '10,2' }).to(svgPaths, {
        strokeDashoffset: -24,
        repeat: -1,
        duration: 0.6,
        ease: 'none',
      })

      return () => {
        tl.kill()
      }
    },
    { dependencies: [pathOne, pathTwo, pathThree] } // Re-run when paths update
  )
  return (
    <div
      ref={groupRef}
      className="font-space relative mx-auto flex w-full max-w-sm flex-col justify-between text-[12px] text-muted-foreground md:h-[248px] md:max-w-screen-sm md:flex-row lg:max-w-screen-xl"
    >
      <div className="absolute lg:block">
        <HandIcon ref={iconRef} className="h-16 w-16 md:h-32 md:w-32" />
      </div>
      <ConnectionNode ref={svgPathOneRef} pathDetails={pathOne} />
      <ConnectionNode ref={svgPathTwoRef} pathDetails={pathTwo} />
      <ConnectionNode ref={svgPathThreeRef} pathDetails={pathThree} />

      {/* <Boxes/> */}
      {/* box1 */}
      <div
        ref={boxOneRef}
        className="h-16 w-full max-w-20 border border-primary bg-black p-2 lg:h-[124px] lg:max-w-[200px] lg:p-7"
      >
        DO THAT
      </div>
      {/* box2 */}
      <div
        ref={boxTwoRef}
        className="h-16 w-full max-w-20 self-end border border-blue-800 bg-black p-2 md:self-center lg:h-[124px] lg:max-w-[200px] lg:self-end lg:p-7"
      >
        THEN DO THIS
      </div>
      {/* box 3 */}
      <div
        ref={boxThreeRef}
        className="h-16 w-full max-w-20 border border-yellow-600 bg-black p-2 lg:h-[124px] lg:max-w-[200px] lg:p-7"
      >
        THEN THIS
      </div>
      {/* box 4 */}
      <div
        ref={boxFourRef}
        className="h-16 w-full max-w-20 self-end border border-pink-800 bg-black p-2 md:self-center lg:h-[124px] lg:max-w-[200px] lg:self-end lg:p-7"
      >
        DONE!
      </div>
    </div>
  )
}
