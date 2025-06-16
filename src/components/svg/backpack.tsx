import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Backpack({ className }: { className?: string }) {
  return (
    <Image
      src={'/assets/images/backPack.jpg'}
      alt="backpack-icon"
      width={720}
      height={720}
      className={cn('h-8 w-8 rounded-lg', className)}
    />
  )
}

export type BackPackType = ReturnType<typeof Backpack>
