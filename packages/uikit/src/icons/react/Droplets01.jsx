import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDroplets01 = (props, ref) => {
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
        d="M22 16C22 19.3137 19.3137 22 16 22 12.6863 22 10 19.3137 10 16 10 11.6863 16 2 16 2 16 2 22 11.6863 22 16ZM8 9C8 10.6569 6.65685 12 5 12 3.34315 12 2 10.6569 2 9 2 6.84315 5 2 5 2 5 2 8 6.84315 8 9Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDroplets01)
const Droplets01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Droplets01'].join(' ')}
    />
  )
})
Droplets01.displayName = 'IconDroplets01'
export default Droplets01
