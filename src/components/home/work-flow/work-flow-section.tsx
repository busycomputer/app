'use client'

import { Ref, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import path from 'path'
import { ConnectionNode, TPathDetails } from '../hero/connection-node'
import HandIcon from '@/components/svg/hand-icon'
import { useUnifiedWorkFlow } from '@/hooks/use-unified-work-flow'

export default function WorkFlowSection() {
  const boxOneRef = useRef<HTMLDivElement>(null)
  const boxTwoRef = useRef<HTMLDivElement>(null)
  const boxThreeRef = useRef<HTMLDivElement>(null)
  const boxFourRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<SVGSVGElement>(null)
  const svgPathOneRef = useRef<SVGSVGElement>(null)
  const svgPathTwoRef = useRef<SVGSVGElement>(null)
  const svgPathThreeRef = useRef<SVGSVGElement>(null)

  const { pathOne, pathThree, pathTwo } = useUnifiedWorkFlow({
    boxFourRef,
    boxOneRef,
    boxThreeRef,
    boxTwoRef,
    groupRef,
    iconRef,
    svgPathOneRef,
    svgPathThreeRef,
    svgPathTwoRef,
  })

  return (
    <div
      ref={groupRef}
      className="font-space relative mx-auto flex w-full max-w-sm flex-col justify-between text-[12px] text-muted-foreground md:h-[248px] md:max-w-screen-sm md:flex-row lg:max-w-screen-xl"
    >
      <div className="absolute lg:block">
        <HandIcon ref={iconRef} className="hidden h-16 w-16 lg:h-32 lg:w-32" />
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
