import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMarkerPin05 = (props, ref) => {
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
        d="M16 13.374c3.532.695 6 2.28 6 4.126 0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.845 2.468-3.431 6-4.126M12 17V3l5.318 3.272c.388.24.581.358.643.509a.5.5 0 0 1-.011.407c-.07.146-.271.254-.672.47L12 10.5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMarkerPin05)
const MarkerPin05 = forwardRef((props, ref) => {
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
MarkerPin05.displayName = 'IconMarkerPin05'
export default MarkerPin05
