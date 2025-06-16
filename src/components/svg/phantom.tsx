import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Phantom({ className }: { className?: string }) {
  return (
    <Image
      src={'/assets/images/phantom.jpg'}
      alt="phantom-icon"
      width={720}
      height={720}
      className={cn('h-8 w-8', className)}
    />
  )
}

export type PhantomType = ReturnType<typeof Phantom>
