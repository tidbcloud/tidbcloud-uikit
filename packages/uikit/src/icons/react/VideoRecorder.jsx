import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVideoRecorder = (props, ref) => {
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
        d="M22 8.931c0-.605 0-.908-.12-1.049a.5.5 0 0 0-.42-.173c-.183.014-.397.228-.826.657L17 12l3.634 3.634c.429.429.643.643.827.657a.5.5 0 0 0 .42-.173c.119-.14.119-.444.119-1.05zM2 9.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 5 5.12 5 6.8 5h5.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C17 7.28 17 8.12 17 9.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C14.72 19 13.88 19 12.2 19H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 16.72 2 15.88 2 14.2z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVideoRecorder)
const VideoRecorder = forwardRef((props, ref) => {
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
VideoRecorder.displayName = 'IconVideoRecorder'
export default VideoRecorder
