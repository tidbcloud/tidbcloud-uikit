import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceSmile = (props, ref) => {
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
        d="M5.3335 9.33325C5.3335 9.33325 6.3335 10.6666 8.00016 10.6666C9.66683 10.6666 10.6668 9.33325 10.6668 9.33325M10.0002 5.99992H10.0068M6.00016 5.99992H6.00683M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992ZM10.3335 5.99992C10.3335 6.18401 10.1843 6.33325 10.0002 6.33325C9.81607 6.33325 9.66683 6.18401 9.66683 5.99992C9.66683 5.81582 9.81607 5.66659 10.0002 5.66659C10.1843 5.66659 10.3335 5.81582 10.3335 5.99992ZM6.3335 5.99992C6.3335 6.18401 6.18426 6.33325 6.00016 6.33325C5.81607 6.33325 5.66683 6.18401 5.66683 5.99992C5.66683 5.81582 5.81607 5.66659 6.00016 5.66659C6.18426 5.66659 6.3335 5.81582 6.3335 5.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceSmile)
const FaceSmile = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceSmile', props.className].join(' ')}
    />
  )
})
FaceSmile.displayName = 'IconFaceSmile'
export default FaceSmile
