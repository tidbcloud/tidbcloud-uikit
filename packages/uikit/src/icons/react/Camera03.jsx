import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCamera03 = (props, ref) => {
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
        d="M1.33337 5.2C1.33337 4.0799 1.33337 3.51984 1.55136 3.09202C1.74311 2.71569 2.04907 2.40973 2.42539 2.21799C2.85322 2 3.41327 2 4.53337 2H11.4667C12.5868 2 13.1469 2 13.5747 2.21799C13.951 2.40973 14.257 2.71569 14.4487 3.09202C14.6667 3.51984 14.6667 4.0799 14.6667 5.2V10.8C14.6667 11.9201 14.6667 12.4802 14.4487 12.908C14.257 13.2843 13.951 13.5903 13.5747 13.782C13.1469 14 12.5868 14 11.4667 14H4.53337C3.41327 14 2.85322 14 2.42539 13.782C2.04907 13.5903 1.74311 13.2843 1.55136 12.908C1.33337 12.4802 1.33337 11.9201 1.33337 10.8V5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00004 10.6667C9.4728 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.4728 5.33333 8.00004 5.33333C6.52728 5.33333 5.33337 6.52724 5.33337 8C5.33337 9.47276 6.52728 10.6667 8.00004 10.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCamera03)
const Camera03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Camera03', props.className].join(' ')}
    />
  )
})
Camera03.displayName = 'IconCamera03'
export default Camera03
