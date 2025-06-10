import Image, { StaticImageData } from 'next/image'
import { CSSProperties, Ref, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import DottedBackground from '@/components/svg/dotted-background-long'
import asset1 from '@/assets/images/feature/Asset 1.webp'
import DottedBackgroundSmall from '@/components/svg/dotted-background-small'
import DottedBackgroundLong from '@/components/svg/dotted-background-long'
import FeatureBoxWrapper from './feature-box-wrapper'
import { motion } from 'framer-motion'
import { generateGradientString } from '@/lib/helpers/generate-gradient-string'

interface GradientConfig {
  shape?: 'ellipse' | 'circle'
  position?: string // e.g., 'center', 'top left', '30% 40%'
  stops?: Array<{
    color: string
    percentage: number
  }>
}

interface FeatureBox {
  className?: string
  imagePosition?: string
  imageClassName?: string
  imageSrc: StaticImageData | string
  imageAlt: string
  label: string
  ref?: Ref<HTMLDivElement>
  type: 'long' | 'small'
  gradient?: GradientConfig
  enableGradient?: boolean
  id: string
}
export default function FeatureBox({
  imageAlt,
  className,
  imageClassName,
  imageSrc,
  imagePosition,
  label,
  ref,
  type,
  enableGradient,
  gradient,
  id,
}: FeatureBox) {
  // Default gradient configuration
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const MotionImage = motion(Image)
  return (
    <FeatureBoxWrapper isMobile={isMobile} id={id} ref={ref} className={className}>
      <div className="relative h-full w-full md:border-y">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: generateGradientString(enableGradient, gradient),
            mixBlendMode: 'multiply',
          }}
        ></div>
        {type === 'long' ? (
          <DottedBackgroundLong svgFillColor="#56bd88" id={id} />
        ) : (
          <DottedBackgroundSmall svgFillColor="#56bd88" isMobile={isMobile} id={id} />
        )}
        <div
          className={cn(
            'absolute inset-0 left-0 top-0 flex h-full w-full items-center justify-center',
            imagePosition
          )}
        >
          <div className="mx-auto my-auto h-full w-full overflow-hidden">
            <MotionImage
              src={imageSrc}
              alt={imageAlt}
              width={1920}
              height={1080}
              className={cn('h-full w-full object-contain', imageClassName)}
              {...(isMobile && {
                initial: { scale: 0.8 },
                whileInView: {
                  scale: 1,
                  filter: isMobile
                    ? 'brightness(1.1) saturate(102%)'
                    : 'brightness(1) saturate(100%)',
                },
                viewport: {
                  amount: 0.5,
                  margin: '-20% 0px -20% 0px',
                },
              })}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
              }}
            />
          </div>
        </div>
      </div>
      <div className="font-space-grotesk w-full truncate border-t px-5 py-5 font-medium uppercase text-mutedText sm:text-xl md:border-none">
        {label}
      </div>
    </FeatureBoxWrapper>
  )
}
