import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemMode = (props, ref) => {
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
        d="M10.9201 13.9948C10.0383 14.4252 9.04729 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8.00004C1.33325 4.31814 4.31802 1.33337 7.99992 1.33337C9.04729 1.33337 10.0383 1.5749 10.9201 2.0053M10.9201 13.9948C10.8361 13.9983 10.7515 14 10.6666 14C7.35288 14 4.66659 11.3137 4.66659 8.00004C4.66659 4.68633 7.35288 2.00004 10.6666 2.00004C10.7515 2.00004 10.8361 2.00181 10.9201 2.0053M10.9201 13.9948C11.923 13.6253 12.9468 12.5119 13.3333 12.0014C15.1106 9.63858 15.111 6.36341 13.3344 4.00019C12.9475 3.48919 11.9999 2.53228 10.9201 2.0053"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemMode)
const SystemMode = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SystemMode', props.className].join(' ')}
    />
  )
})
SystemMode.displayName = 'IconSystemMode'
export default SystemMode
