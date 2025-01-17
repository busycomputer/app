import React from 'react'

export function DotBackground() {
  return (
    <div className="pointer-events-none fixed z-0 flex h-screen w-screen items-center justify-center overflow-hidden overscroll-none bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  )
}
