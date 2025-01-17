import React from 'react'

export function DotBackground() {
  return (
    <div className="pointer-events-none fixed -z-10 flex h-screen w-screen items-center justify-center overflow-hidden overscroll-none bg-background bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--foreground)))]"></div>
    </div>
  )
}
