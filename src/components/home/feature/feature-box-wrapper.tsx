'use client'
import { motion } from 'framer-motion'
import { Ref, useEffect, useState } from 'react'
import { setFeatureHover } from '@/lib/store/feature-slice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'
import { cn } from '@/lib/utils'
interface IFeatureBoxWrapper {
  children: React.ReactNode
  className?: string
  ref?: Ref<HTMLDivElement>
  id: string
  isMobile: boolean
}
export default function FeatureBoxWrapper({
  children,
  className,
  ref,
  id,
  isMobile,
}: IFeatureBoxWrapper) {
  const dispatch = useAppDispatch()
  const isHovered = useAppSelector((state) => state.feature.featureCardHover[id])

  return (
    <motion.div
      onMouseEnter={() => !isMobile && dispatch(setFeatureHover({ id, isHovered: true }))}
      onMouseLeave={() => !isMobile && dispatch(setFeatureHover({ id, isHovered: false }))}
      className={cn('flex w-full flex-col bg-black hover:z-30', className)}
      ref={ref}
      animate={{
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -8 : 0,
        zIndex: isHovered ? 20 : 0,
      }}
      style={{
        boxShadow: isHovered
          ? '0 5px 5px -12px rgba(86, 189, 136, 0.8), 0 0 0 1px rgba(86, 189, 136, 0.3)'
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for premium feel
      }}
    >
      {children}
    </motion.div>
  )
}
