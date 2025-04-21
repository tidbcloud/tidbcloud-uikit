import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle03Right = (props, ref) => {
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
        d="M1.33331 8C1.33331 5.79086 3.12417 4 5.33331 4H10.6666C12.8758 4 14.6666 5.79086 14.6666 8C14.6666 10.2091 12.8758 12 10.6666 12H5.33331C3.12417 12 1.33331 10.2091 1.33331 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M10.6666 9.66667C11.5871 9.66667 12.3333 8.92047 12.3333 8C12.3333 7.07953 11.5871 6.33333 10.6666 6.33333C9.74617 6.33333 8.99998 7.07953 8.99998 8C8.99998 8.92047 9.74617 9.66667 10.6666 9.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle03Right)
const Toggle03Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle03Right', props.className].join(' ')}
    />
  )
})
Toggle03Right.displayName = 'IconToggle03Right'
export default Toggle03Right
