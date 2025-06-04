import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMoon = (props, ref) => {
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
        d="M14.6366 8.63758C13.7187 10.2478 11.9861 11.3334 10 11.3334C7.05452 11.3334 4.66671 8.94557 4.66671 6.00006C4.66671 4.01381 5.75249 2.28117 7.36289 1.36328C3.97987 1.68404 1.33337 4.53291 1.33337 7.9999C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666C11.4668 14.6666 14.3156 12.0203 14.6366 8.63758Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMoon)
const Moon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Moon', props.className].join(' ')}
    />
  )
})
Moon.displayName = 'IconMoon'
export default Moon
