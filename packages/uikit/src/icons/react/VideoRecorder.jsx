import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVideoRecorder = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M14.6663 5.95417C14.6663 5.55029 14.6663 5.34835 14.5865 5.25484C14.5172 5.1737 14.4132 5.13065 14.3069 5.13902C14.1843 5.14867 14.0415 5.29146 13.7559 5.57704L11.333 7.99992L13.7559 10.4228C14.0415 10.7084 14.1843 10.8512 14.3069 10.8608C14.4132 10.8692 14.5172 10.8261 14.5865 10.745C14.6663 10.6515 14.6663 10.4495 14.6663 10.0457V5.95417Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 6.53325C1.33301 5.41315 1.33301 4.85309 1.55099 4.42527C1.74274 4.04895 2.0487 3.74299 2.42503 3.55124C2.85285 3.33325 3.4129 3.33325 4.53301 3.33325H8.13301C9.25311 3.33325 9.81317 3.33325 10.241 3.55124C10.6173 3.74299 10.9233 4.04895 11.115 4.42527C11.333 4.85309 11.333 5.41315 11.333 6.53325V9.46659C11.333 10.5867 11.333 11.1467 11.115 11.5746C10.9233 11.9509 10.6173 12.2569 10.241 12.4486C9.81317 12.6666 9.25311 12.6666 8.13301 12.6666H4.53301C3.4129 12.6666 2.85285 12.6666 2.42503 12.4486C2.0487 12.2569 1.74274 11.9509 1.55099 11.5746C1.33301 11.1467 1.33301 10.5867 1.33301 9.46659V6.53325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'VideoRecorder', props.className].join(' ')}
    />
  )
})
VideoRecorder.displayName = 'IconVideoRecorder'
export default VideoRecorder
