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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00033 11.9999C10.9458 11.9999 13.3337 9.6121 13.3337 6.66659C13.3337 3.72107 10.9458 1.33325 8.00033 1.33325C5.05481 1.33325 2.66699 3.72107 2.66699 6.66659C2.66699 9.6121 5.05481 11.9999 8.00033 11.9999ZM8.00033 11.9999V14.6666M8.00033 14.6666H4.66699M8.00033 14.6666H11.3337M10.0003 6.66659C10.0003 7.77115 9.10489 8.66659 8.00033 8.66659C6.89576 8.66659 6.00033 7.77115 6.00033 6.66659C6.00033 5.56202 6.89576 4.66659 8.00033 4.66659C9.10489 4.66659 10.0003 5.56202 10.0003 6.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
