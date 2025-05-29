'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface RandomBox {
  id: number
  gridX: number
  gridY: number
  delay: number
  duration: number
}

export default function AnimatedBackgroundSquare() {
  const [randomBoxes, setRandomBoxes] = useState<RandomBox[]>([])
  const [dimensions, setDimensions] = useState({ width: 1950, height: 920 })
  const boxWidth = 40.0812
  const boxHeight = 40.1187
  // const gridCols = Math.floor(1800 / boxWidth)
  // const gridRows = Math.floor(920 / boxHeight)

  // Then update your calculations
  const gridCols = Math.floor(dimensions.width / boxWidth)
  const gridRows = Math.floor(dimensions.height / boxHeight)
  const generateRandomBoxes = () => {
    const numBoxes = Math.floor(Math.random() * 20) + 5 // 5-29 boxes
    const newBoxes: RandomBox[] = []
    const minDistance = 3 // minimum 3 grid cells apart
    const maxAttempts = 100 // prevent infinite loops

    for (let i = 0; i < numBoxes; i++) {
      let attempts = 0
      let validPosition = false
      let gridX: number, gridY: number

      while (!validPosition && attempts < maxAttempts) {
        gridX = Math.floor(Math.random() * gridCols)
        gridY = Math.floor(Math.random() * gridRows)

        // Check distance from all existing boxes
        validPosition = newBoxes.every((existingBox) => {
          const distance = Math.sqrt(
            Math.pow(gridX - existingBox.gridX, 2) + Math.pow(gridY - existingBox.gridY, 2)
          )
          return distance >= minDistance
        })

        attempts++
      }

      // If we found a valid position, add the box with random timing
      if (validPosition) {
        newBoxes.push({
          id: i,
          gridX: gridX!,
          gridY: gridY!,
          delay: Math.random() * 1, // 0-2 seconds delay
          duration: Math.random() * 0.8, // 0.3-1.5 seconds duration
        })
      }
    }

    setRandomBoxes(newBoxes)
  }
  useEffect(() => {
    generateRandomBoxes()

    // Optional: Regenerate boxes every 3 seconds
    const interval = setInterval(generateRandomBoxes, 1000)
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="h-full w-full overflow-hidden ">
      <svg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} className="h-full w-full">
        {' '}
        {/* vertical lines */}
        {Array.from({ length: 48 }).map((_, i) => {
          return (
            <line
              key={`vertical-line-${i}`}
              x1={(i + 1) * boxWidth}
              y1={0}
              x2={(i + 1) * boxWidth}
              y2={920}
              stroke="#131316"
            />
          )
        })}
        {/* horizontal lines */}
        {Array.from({ length: 23 }).map((_, i) => {
          return (
            <line
              key={`horizontal-line-${i}`}
              y1={(i + 1) * boxHeight}
              x1={0}
              y2={(i + 1) * boxHeight}
              x2={1950}
              stroke="#131316"
            />
          )
        })}
        <AnimatePresence>
          {randomBoxes.map((item, i) => (
            <motion.rect
              key={`${item.gridX}-${item.gridY}-${i}`}
              x={item.gridX * boxWidth}
              y={item.gridY * boxHeight}
              width={boxWidth}
              height={boxHeight}
              fill="#0E0E10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: item.delay,
                duration: item.duration,
                // ease: 'easeOut',
              }}
              exit={{ opacity: 0 }}
              // className={'animate-pulse'}
            />
          ))}
        </AnimatePresence>
      </svg>
    </div>
  )
}
