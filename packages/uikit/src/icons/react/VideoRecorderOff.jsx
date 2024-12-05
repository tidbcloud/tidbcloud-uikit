import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVideoRecorderOff = (props, ref) => {
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
        d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 2.87-2.125M17 12l3.634-3.634c.429-.429.643-.643.827-.657a.5.5 0 0 1 .42.173c.119.14.119.444.119 1.05v6.137c0 .605 0 .908-.12 1.049a.5.5 0 0 1-.42.173c-.183-.014-.397-.228-.826-.657zm0 0V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 5 13.88 5 12.2 5H9.5M2 2l20 20"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVideoRecorderOff)
const VideoRecorderOff = forwardRef((props, ref) => {
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
VideoRecorderOff.displayName = 'IconVideoRecorderOff'
export default VideoRecorderOff
