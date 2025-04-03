import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconIntersectCircle = (props, ref) => {
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
        d="M6.00016 10.6666C8.57749 10.6666 10.6668 8.57725 10.6668 5.99992C10.6668 3.42259 8.57749 1.33325 6.00016 1.33325C3.42283 1.33325 1.3335 3.42259 1.3335 5.99992C1.3335 8.57725 3.42283 10.6666 6.00016 10.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0002 14.6666C12.5775 14.6666 14.6668 12.5772 14.6668 9.99992C14.6668 7.42259 12.5775 5.33325 10.0002 5.33325C7.42283 5.33325 5.3335 7.42259 5.3335 9.99992C5.3335 12.5772 7.42283 14.6666 10.0002 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconIntersectCircle)
const IntersectCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'IntersectCircle', props.className].join(' ')}
    />
  )
})
IntersectCircle.displayName = 'IconIntersectCircle'
export default IntersectCircle
