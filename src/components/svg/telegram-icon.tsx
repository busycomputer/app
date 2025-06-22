'use client'

import { useEffect, useState } from 'react'

export default function TelegramIcon() {
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
            style={
              isSafariMobile
                ? {
                    fill: '#FFFFFF !important',
                    WebkitTextFillColor: '#FFFFFF',
                  }
                : { fill: 'white' }
            }
            d="M117.71,91.72c-9.64,9.68-19.76,18.87-29.65,28.28-3.4,3.23-3.29,5.83.11,8.99.56.52,1.15,1.01,1.77,1.47,9.55,7.24,19.66,13.66,29.68,20.23,2.38,1.56,5,2.71,7.79,3.35,4.07.94,7.55-1.1,8.73-5.12.28-.95.44-1.95.6-2.93,2.89-18.19,5.79-36.37,8.64-54.57,1.25-7.96,2.38-15.93,3.35-22.46.13-6.32-2.27-8.36-7.05-7.44-.97.19-1.94.5-2.85.88-6.68,2.73-13.35,5.49-20.02,8.24-25.04,10.35-50.08,20.71-75.12,31.08-1.84.76-3.74,1.41-5.32,2.7-2.85,2.32-2.48,5.31.98,6.53,6.44,2.26,12.91,4.5,19.54,6.17,5.01,1.26,9.54.55,13.96-2.51,13.19-9.13,26.57-17.99,39.88-26.96,1.92-1.29,3.92-2.41,6.15-3.1.74-.23,1.53-.43,2.18.18.77.73.35,1.59.05,2.36-.71,1.83-2,3.25-3.36,4.62Z"
          />
        </g>
      </g>
    </svg>
  )
}
