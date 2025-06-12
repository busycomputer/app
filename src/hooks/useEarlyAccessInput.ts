import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const useEarlyAccessInput = () => {
  const inputRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const inputBox = inputRef.current
    if (!inputBox) return
    gsap.fromTo(
      inputBox,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 0.3,
        duration: 0.4,
      }
    )
  })

  return {
    inputRef,
  }
}
