import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsHorizontal = (props, ref) => {
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
        d="M8 8.66659C8.36819 8.66659 8.66666 8.36811 8.66666 7.99992C8.66666 7.63173 8.36819 7.33325 8 7.33325C7.63181 7.33325 7.33333 7.63173 7.33333 7.99992C7.33333 8.36811 7.63181 8.66659 8 8.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M12.6667 8.66659C13.0349 8.66659 13.3333 8.36811 13.3333 7.99992C13.3333 7.63173 13.0349 7.33325 12.6667 7.33325C12.2985 7.33325 12 7.63173 12 7.99992C12 8.36811 12.2985 8.66659 12.6667 8.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M3.33333 8.66659C3.70152 8.66659 4 8.36811 4 7.99992C4 7.63173 3.70152 7.33325 3.33333 7.33325C2.96514 7.33325 2.66666 7.63173 2.66666 7.99992C2.66666 8.36811 2.96514 8.66659 3.33333 8.66659Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsHorizontal)
const DotsHorizontal = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DotsHorizontal', props.className].join(' ')}
    />
  )
})
DotsHorizontal.displayName = 'IconDotsHorizontal'
export default DotsHorizontal
