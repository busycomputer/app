import { Ref } from "react"

export type TPathDetails = {
    x1: number
    y1: number
    x2: number
    y2: number
    controlOffset: number
  }
  type TConnectionNodes = {
    pathDetails: TPathDetails
    ref?: Ref<SVGSVGElement>
  }
  
  export function ConnectionNode({ pathDetails: { controlOffset, x1, x2, y1, y2 }, ref }: TConnectionNodes) {
    return (
      <svg className="animate-dash absolute h-full w-full" ref={ref}>
        <path
          d={`M ${x1},${y1} C ${x1 + controlOffset},${y1} ${x2 - controlOffset},${y2} ${x2},${y2}`}
          stroke="#7743CB"
          strokeWidth="2"
          strokeDasharray={4}
          fill="none"
        />
      </svg>
    )
  }
  