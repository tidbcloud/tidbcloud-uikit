import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceHappy = (props, ref) => {
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
        d="M10.0002 5.99992H10.0068M6.00016 5.99992H6.00683M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992ZM10.3335 5.99992C10.3335 6.18401 10.1843 6.33325 10.0002 6.33325C9.81607 6.33325 9.66683 6.18401 9.66683 5.99992C9.66683 5.81582 9.81607 5.66659 10.0002 5.66659C10.1843 5.66659 10.3335 5.81582 10.3335 5.99992ZM6.3335 5.99992C6.3335 6.18401 6.18426 6.33325 6.00016 6.33325C5.81607 6.33325 5.66683 6.18401 5.66683 5.99992C5.66683 5.81582 5.81607 5.66659 6.00016 5.66659C6.18426 5.66659 6.3335 5.81582 6.3335 5.99992ZM8.00016 11.6666C9.66716 11.6666 11.0002 10.4446 11.0002 9.33325H5.00016C5.00016 10.4446 6.33316 11.6666 8.00016 11.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceHappy)
const FaceHappy = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceHappy', props.className].join(' ')}
    />
  )
})
FaceHappy.displayName = 'IconFaceHappy'
export default FaceHappy
