import Image, { StaticImageData } from 'next/image'
import { Ref } from 'react'
import { cn } from '@/lib/utils'

interface FeatureBox {
  className?: string
  imageSrc: StaticImageData | string
  imageAlt: string
  label: string
  ref?: Ref<HTMLDivElement>
}
export default function FeatureBox({ className, imageAlt, imageSrc, label, ref }: FeatureBox) {
  return (
    <div className={cn('flex w-full flex-col', className)} ref={ref}>
      {/* hover animation ---> sm:hover:border sm:hover:border-primary transition-transform ease-in-out sm:hover:scale-105 duration-300 */}
      <div className="h-full w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover max-md:aspect-square"
        />
      </div>
      <div className="font-space-grotesk w-full truncate px-5 py-5 font-medium uppercase text-mutedText sm:text-xl">
        {label}
      </div>
    </div>
  )
}
