import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget05 = (props, ref) => {
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
        d="M7.99998 14.6666C11.6819 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6819 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 11.6819 4.31808 14.6666 7.99998 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M7.99998 12C10.2091 12 12 10.2091 12 7.99998C12 5.79084 10.2091 3.99998 7.99998 3.99998C5.79084 3.99998 3.99998 5.79084 3.99998 7.99998C3.99998 10.2091 5.79084 12 7.99998 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M7.99998 9.33331C8.73636 9.33331 9.33331 8.73636 9.33331 7.99998C9.33331 7.2636 8.73636 6.66665 7.99998 6.66665C7.2636 6.66665 6.66665 7.2636 6.66665 7.99998C6.66665 8.73636 7.2636 9.33331 7.99998 9.33331Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget05)
const Target05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target05', props.className].join(' ')}
    />
  )
})
Target05.displayName = 'IconTarget05'
export default Target05
