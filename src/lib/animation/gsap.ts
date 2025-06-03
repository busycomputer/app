import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export function handleDesktopAnimation(boxes: HTMLDivElement[]) {
  const desktopWorkFlowTimeLine = gsap.timeline()
  desktopWorkFlowTimeLine.add(
    //   box pop in animation
    gsap.fromTo(
      [boxes],
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.2, ease: 'power1.inOut' }
    )
  )
  return desktopWorkFlowTimeLine
}

export function handleMobileAnimation({
  boxes,
  container,
}: {
  boxes: HTMLDivElement[]
  container: HTMLDivElement
}) {
  const mobileWorkFlowTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 50%',
      markers: true,
    },
  })
  mobileWorkFlowTimeLine.add(
    //   box pop in animation
    gsap.fromTo(
      [boxes],
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.2, ease: 'power1.inOut' }
    )
  )

  return mobileWorkFlowTimeLine
}
