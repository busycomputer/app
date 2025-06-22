'use client'
import { useEffect, useState } from 'react'

export default function Twitter() {
  const [isSafariMobile, setIsSafariMobile] = useState(false)

  useEffect(() => {
    // Detect Safari mobile
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

    setIsSafariMobile(isSafari && (isMobile || isIOS))
  }, [])

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <g id="Layer_1-2" data-name="Layer_1">
        <g>
          <rect width="200" height="200" />
          <path
            fill={isSafariMobile ? '#FFFFFF' : 'white'}
            fillRule="evenodd"
            style={
              isSafariMobile
                ? {
                    fill: '#FFFFFF !important',
                    WebkitTextFillColor: '#FFFFFF',
                  }
                : { fill: 'white' }
            }
            d="M80.59,52.36h-33.09l39.22,51.82-36.71,43.46h16.97l27.77-32.87,24.66,32.57h33.09l-40.37-53.32.07.09,34.76-41.15h-16.97l-25.81,30.56-23.59-31.16h0ZM65.76,61.43h10.3l58.17,76.83h-10.3l-58.17-76.83Z"
          />
        </g>
      </g>
    </svg>
  )
}
