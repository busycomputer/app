import Image, { StaticImageData } from 'next/image'
import { CSSProperties, Ref } from 'react'
import { cn } from '@/lib/utils'
import DottedBackground from '@/components/svg/dotted-background-long'
import asset1 from '@/assets/images/feature/Asset 1.webp'
import DottedBackgroundSmall from '@/components/svg/dotted-background-small'
import DottedBackgroundLong from '@/components/svg/dotted-background-long'
import FeatureBoxWrapper from './feature-box-wrapper'

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
  className,
  imageAlt,
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
  const defaultGradient: GradientConfig = {
    shape: 'ellipse',
    position: 'center',
    stops: [
      { color: 'transparent', percentage: 0 },
      { color: 'transparent', percentage: 50 },
      { color: 'black', percentage: 100 },
    ],
  }

  // Merge with provided gradient config
  const finalGradient = { ...defaultGradient, ...gradient }

  // Generate gradient string
  const generateGradientString = () => {
    if (!enableGradient) return 'none'

    // If no gradient config provided, use original default
    if (!gradient) {
      return 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, black 100%)'
    }

    const { shape, position, stops } = finalGradient
    const stopsString =
      stops?.map((stop) => `${stop.color} ${stop.percentage}%`).join(', ') ||
      'transparent 0%, transparent 50%, black 100%'

    return `radial-gradient(${shape} at ${position}, ${stopsString})`
  }
  return (
    <FeatureBoxWrapper id={id} ref={ref} className={className}>
      <div className="relative h-full w-full border-y">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: generateGradientString(),
            mixBlendMode: 'multiply',
          }}
        ></div>
        {type === 'long' ? <DottedBackgroundLong id={id} /> : <DottedBackgroundSmall id={id} />}
        <div
          className={cn(
            'absolute inset-0 left-0 top-0 flex h-full w-full items-center justify-center',
            imagePosition
          )}
        >
          <div className="mx-auto my-auto h-full w-full">
            <Image
              src={imageSrc}
              alt=""
              width={1920}
              height={1080}
              className={cn('h-full w-full object-contain', imageClassName)}
            />
          </div>
        </div>
      </div>
      <div className="font-space-grotesk w-full truncate px-5 py-5 font-medium uppercase text-mutedText sm:text-xl">
        {label}
      </div>
    </FeatureBoxWrapper>
  )
}
