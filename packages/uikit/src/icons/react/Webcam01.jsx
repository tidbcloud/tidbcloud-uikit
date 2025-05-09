import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWebcam01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00008 11.9999C10.9456 11.9999 13.3334 9.6121 13.3334 6.66659C13.3334 3.72107 10.9456 1.33325 8.00008 1.33325C5.05456 1.33325 2.66675 3.72107 2.66675 6.66659C2.66675 9.6121 5.05456 11.9999 8.00008 11.9999ZM8.00008 11.9999V14.6666M8.00008 14.6666H4.66675M8.00008 14.6666H11.3334M10.0001 6.66659C10.0001 7.77115 9.10465 8.66659 8.00008 8.66659C6.89551 8.66659 6.00008 7.77115 6.00008 6.66659C6.00008 5.56202 6.89551 4.66659 8.00008 4.66659C9.10465 4.66659 10.0001 5.56202 10.0001 6.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWebcam01)
const Webcam01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Webcam01', props.className].join(' ')}
    />
  )
})
Webcam01.displayName = 'IconWebcam01'
export default Webcam01
