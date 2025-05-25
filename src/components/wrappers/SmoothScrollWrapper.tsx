"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
// import { useEffect, useRef } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Locomotive scroll

  // useEffect(()=>{
  //   (async()=>{
  //     const LocomotiveScroll =  (await import('locomotive-scroll')).default
  //     const locomotiveScroll = new LocomotiveScroll()
  //   })()
  // },[])

  // Lenis scroll

  return (
    <ReactLenis className="" root>
      {children}
    </ReactLenis>
  );
}
