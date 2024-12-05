import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemEndpoint = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 14 14"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.525 7a.44.44 0 0 0 .452-.474 5 5 0 0 0-9.72-1.109.44.44 0 0 0 .334.564c.256.06.508-.101.597-.348a4.05 4.05 0 0 1 7.834.893c.03.26.24.474.503.474M2.668 8.308a.44.44 0 0 0-.296.585 5 5 0 0 0 4.206 3.09.44.44 0 0 0 .47-.458c-.003-.263-.218-.47-.48-.498a4.05 4.05 0 0 1-3.282-2.41c-.104-.241-.367-.385-.618-.31M11.358 9.073a.55.55 0 0 0-.26-.417q-.228-.15-.574-.15-.249 0-.43.076a.66.66 0 0 0-.281.205.47.47 0 0 0-.098.294.4.4 0 0 0 .066.238.6.6 0 0 0 .18.17q.112.065.24.111.127.044.246.072l.394.099q.192.045.395.123.202.078.376.205t.28.314a.9.9 0 0 1 .108.45q0 .33-.177.585a1.17 1.17 0 0 1-.51.404q-.333.148-.805.148-.453 0-.784-.138a1.2 1.2 0 0 1-.517-.393A1.1 1.1 0 0 1 9 10.863h.61q.019.21.142.35.125.139.32.207.198.066.432.066.258 0 .459-.078a.77.77 0 0 0 .319-.22.5.5 0 0 0 .116-.331.4.4 0 0 0-.103-.283.8.8 0 0 0-.273-.182 3 3 0 0 0-.388-.127l-.476-.125q-.485-.127-.768-.373a.82.82 0 0 1-.282-.652q0-.337.19-.586.188-.25.511-.389a1.8 1.8 0 0 1 .728-.14q.41 0 .723.138.315.14.496.381.18.24.189.554z"
        strokeWidth="inherit"
        stroke="currentColor"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M1 7h6" strokeWidth="inherit" />
      <circle cx={7} cy={7} r={1} fill="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemEndpoint)
const SystemEndpoint = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
SystemEndpoint.displayName = 'IconSystemEndpoint'
export default SystemEndpoint
