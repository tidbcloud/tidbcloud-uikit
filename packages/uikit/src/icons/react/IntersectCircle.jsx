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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.99998 10.6666C8.57731 10.6666 10.6666 8.57725 10.6666 5.99992C10.6666 3.42259 8.57731 1.33325 5.99998 1.33325C3.42265 1.33325 1.33331 3.42259 1.33331 5.99992C1.33331 8.57725 3.42265 10.6666 5.99998 10.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M9.99998 14.6666C12.5773 14.6666 14.6666 12.5772 14.6666 9.99992C14.6666 7.42259 12.5773 5.33325 9.99998 5.33325C7.42265 5.33325 5.33331 7.42259 5.33331 9.99992C5.33331 12.5772 7.42265 14.6666 9.99998 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
