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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 22H16M20.5 10.5C20.5 15.1944 16.6944 19 12 19C7.30558 19 3.5 15.1944 3.5 10.5C3.5 5.80558 7.30558 2 12 2C16.6944 2 20.5 5.80558 20.5 10.5ZM15.1875 10.5C15.1875 12.2604 13.7604 13.6875 12 13.6875C10.2396 13.6875 8.8125 12.2604 8.8125 10.5C8.8125 8.73959 10.2396 7.3125 12 7.3125C13.7604 7.3125 15.1875 8.73959 15.1875 10.5Z"
        strokeWidth="inherit"
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
