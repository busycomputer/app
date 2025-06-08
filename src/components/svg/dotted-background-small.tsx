'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAppSelector } from '@/lib/store/hooks'

export default function DottedBackgroundSmall({ id }: { id: string }) {
  const isHovered = useAppSelector((state) => state.feature.featureCardHover[id])

  // Generate circles programmatically with animation
  const generateCircles = () => {
    const circles: React.ReactElement<SVGCircleElement>[] = []
    const yPositions = [1.9, 25.3, 48.8, 72.2, 95.6, 119, 142.4, 165.9, 189.3, 212.7, 236.1, 259.6]
    const xPositions = [
      1.9, 25.8, 49.7, 73.6, 97.4, 121.3, 145.2, 169.1, 193, 216.9, 240.8, 264.6, 288.5, 312.4,
    ]

    // Calculate center point for wave effect
    const centerX = (xPositions[0] + xPositions[xPositions.length - 1]) / 2
    const maxDistance = Math.abs(xPositions[xPositions.length - 1] - centerX)

    yPositions.forEach((y, rowIndex) => {
      xPositions.forEach((x, colIndex) => {
        const distanceFromCenter = Math.abs(x - centerX)
        const normalizedDistance = distanceFromCenter / maxDistance

        circles.push(
          <motion.circle
            key={`${rowIndex}-${colIndex}`}
            cx={x}
            cy={y}
            r="1.9"
            fill="#1e1e1e"
            animate={
              isHovered
                ? {
                    fill: ['#1e1e1e', '#3b82f6', '#1e1e1e'],
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
      })
    })

    return circles
  }

  return (
    <div
      className="cursor-pointer"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <svg id={id} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 314.3 261.5">
        <g id="Layer_1-2">{generateCircles()}</g>
      </svg>
    </div>
  )
}
