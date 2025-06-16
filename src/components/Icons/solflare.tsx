import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Solflare({
  className,
}: {
  className?: string
  width?: number
  heigh?: number
}) {
  return (
    <Image
      src={'/assets/images/solflare.png'}
      alt="Solflare-icon"
      width={720}
      height={720}
      className={cn('h-8 w-8', className)}
    />
  )
}

export type SolflareType = ReturnType<typeof Solflare>
