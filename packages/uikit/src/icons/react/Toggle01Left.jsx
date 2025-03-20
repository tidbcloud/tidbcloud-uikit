import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle01Left = (props, ref) => {
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
        d="M7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H7M7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle01Left)
const Toggle01Left = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Toggle01Left'].join(' ')}
    />
  )
})
Toggle01Left.displayName = 'IconToggle01Left'
export default Toggle01Left
