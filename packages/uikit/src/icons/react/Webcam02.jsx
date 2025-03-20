import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWebcam02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 22h8m4.5-11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m-5.312 0a3.188 3.188 0 1 1-6.376 0 3.188 3.188 0 0 1 6.376 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWebcam02)
const Webcam02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Webcam02'].join(' ')}
    />
  )
})
Webcam02.displayName = 'IconWebcam02'
export default Webcam02
