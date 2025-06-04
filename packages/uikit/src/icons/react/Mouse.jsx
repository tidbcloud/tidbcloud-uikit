import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMouse = (props, ref) => {
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
        d="M7.99992 5.99992V3.99992M7.99992 14.6666C5.42259 14.6666 3.33325 12.5772 3.33325 9.99992V5.99992C3.33325 3.42259 5.42259 1.33325 7.99992 1.33325C10.5772 1.33325 12.6666 3.42259 12.6666 5.99992V9.99992C12.6666 12.5772 10.5772 14.6666 7.99992 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMouse)
const Mouse = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Mouse', props.className].join(' ')}
    />
  )
})
Mouse.displayName = 'IconMouse'
export default Mouse
