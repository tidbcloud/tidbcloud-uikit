import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWebcam02 = (props, ref) => {
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
        d="M5.33301 14.6666H10.6663M13.6663 6.99992C13.6663 10.1295 11.1293 12.6666 7.99967 12.6666C4.87006 12.6666 2.33301 10.1295 2.33301 6.99992C2.33301 3.8703 4.87006 1.33325 7.99967 1.33325C11.1293 1.33325 13.6663 3.8703 13.6663 6.99992ZM10.1247 6.99992C10.1247 8.17352 9.17328 9.12492 7.99967 9.12492C6.82607 9.12492 5.87467 8.17352 5.87467 6.99992C5.87467 5.82631 6.82607 4.87492 7.99967 4.87492C9.17328 4.87492 10.1247 5.82631 10.1247 6.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Webcam02', props.className].join(' ')}
    />
  )
})
Webcam02.displayName = 'IconWebcam02'
export default Webcam02
