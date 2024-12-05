import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAirpods = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 7.625a4.125 4.125 0 0 0 4.125 4.125c.306 0 .459 0 .538.027a.45.45 0 0 1 .31.31c.027.08.027.203.027.452v6.336a1.625 1.625 0 1 0 3.25 0V7.625a4.125 4.125 0 0 0-8.25 0M22 7.625a4.125 4.125 0 0 1-4.125 4.125c-.306 0-.459 0-.538.027a.45.45 0 0 0-.31.31c-.027.08-.027.203-.027.452v6.336a1.625 1.625 0 1 1-3.25 0V7.625a4.125 4.125 0 1 1 8.25 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAirpods)
const Airpods = forwardRef((props, ref) => {
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
Airpods.displayName = 'IconAirpods'
export default Airpods
