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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.33325 14.6666H10.6666M13.6666 6.99992C13.6666 10.1295 11.1295 12.6666 7.99992 12.6666C4.8703 12.6666 2.33325 10.1295 2.33325 6.99992C2.33325 3.8703 4.8703 1.33325 7.99992 1.33325C11.1295 1.33325 13.6666 3.8703 13.6666 6.99992ZM10.1249 6.99992C10.1249 8.17352 9.17352 9.12492 7.99992 9.12492C6.82631 9.12492 5.87492 8.17352 5.87492 6.99992C5.87492 5.82631 6.82631 4.87492 7.99992 4.87492C9.17352 4.87492 10.1249 5.82631 10.1249 6.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Webcam02', props.className].join(' ')}
    />
  )
})
Webcam02.displayName = 'IconWebcam02'
export default Webcam02
