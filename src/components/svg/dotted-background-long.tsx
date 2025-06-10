'use client'
import { motion, useInView } from 'framer-motion'
import { Ref, useRef, useState } from 'react'
import { useAppSelector } from '@/lib/store/hooks'

export default function DottedBackgroundLong({
  id,
  svgFillColor
}: {
  id: string
  svgFillColor:string
}) {
  // const [featureCardHover, setfeatureCardHover] = useState(false)
  const isHovered = useAppSelector((state) => state.feature.featureCardHover[id])
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5, margin: '-20% 0px -20% 0px' })
  // Generate circles for desktop version
  const generateDesktopCircles = () => {
    const circles: React.ReactElement<SVGCircleElement>[] = []
    const yPositions = [
      1.9, 25.32, 48.75, 72.17, 95.6, 119.02, 142.45, 165.87, 189.3, 212.72, 236.15, 259.57,
    ]
    const xStart = 1.9
    const xSpacing = 23.88
    const circleCount = 29
    const centerX = ((circleCount - 1) * xSpacing) / 2 + xStart

    yPositions.forEach((y, rowIndex) => {
      for (let i = 0; i < circleCount; i++) {
        const x = xStart + i * xSpacing
        const distanceFromCenter = Math.abs(x - centerX)
        const maxDistance = centerX - xStart
        const normalizedDistance = distanceFromCenter / maxDistance

        circles.push(
          <motion.circle
            key={`desktop-${rowIndex}-${i}`}
            cx={x}
            cy={y}
            r="1.9"
            fill="#1e1e1e"
            animate={
              isHovered
                ? {
                    fill: ['#1e1e1e', `${svgFillColor}`, '#1e1e1e'],
                    scale: [1, 1.2, 1],
                  }
                : {
                    fill: '#1e1e1e',
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.5,
              delay: isHovered ? normalizedDistance * 0.8 : 0,
              ease: 'easeInOut',
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 0.5,
            }}
          />
        )
      }
    })

    return circles
  }

  // Generate circles for mobile version
  const generateMobileCircles = () => {
    const circles: React.ReactElement<SVGCircleElement>[] = []
    const yPositions = [1.9, 25.3, 48.8, 72.2, 95.6, 119, 142.4, 165.9, 189.3, 212.7, 236.1, 259.6]
    const xStart = 1.9
    const xSpacing = 23.9
    const circleCount = 14
    const centerX = ((circleCount - 1) * xSpacing) / 2 + xStart

    yPositions.forEach((y, rowIndex) => {
      for (let i = 0; i < circleCount; i++) {
        const x = xStart + i * xSpacing
        const distanceFromCenter = Math.abs(x - centerX)
        const maxDistance = centerX - xStart
        const normalizedDistance = distanceFromCenter / maxDistance

        circles.push(
          <motion.circle
            key={`mobile-${rowIndex}-${i}`}
            cx={x}
            cy={y}
            r="1.9"
            fill="#1e1e1e"
            animate={
              inView
                ? {
                    fill: ['#1e1e1e', `${svgFillColor}`, '#1e1e1e'],
                    scale: [1, 1.2, 1],
                  }
                : {
                    fill: '#1e1e1e',
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.5,
              delay: inView ? normalizedDistance * 0.5 : 0,
              ease: 'easeInOut',
              repeat: inView ? Infinity : 0,
              repeatDelay: 0.5,
            }}
          />
        )
      }
    })

    return circles
  }

  return (
    <div
      className="cursor-pointer"
      ref={ref}
      // onMouseEnter={() => setfeatureCardHover(true)}
      // onMouseLeave={() => setfeatureCardHover(false)}
    >
      {/* Desktop SVG */}
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 672.62 261.47"
        className="hidden md:block"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <g>{generateDesktopCircles()}</g>
        </g>
      </svg>

      {/* Mobile SVG */}
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 314.3 261.5"
        className="block md:hidden"
      >
        <g id="Layer_1-2">
          <g>{generateMobileCircles()}</g>
        </g>
      </svg>
    </div>
  )
}
