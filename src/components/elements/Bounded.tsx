import React from 'react'
import { cn } from '@/lib/utils'

type BoundedProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = 'section', className, children, ...restProps }, ref) => {
    return (
      <Comp ref={ref} className={cn('mx-auto w-full max-w-5xl', className)} {...restProps}>
        {children}
      </Comp>
    )
  }
)

Bounded.displayName = 'Bounded'
export default Bounded
