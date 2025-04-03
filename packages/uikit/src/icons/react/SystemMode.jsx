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
      ref={ref}
      {...props}
    >
      <path
        d="M10.9199 13.9948C10.038 14.4252 9.04705 14.6667 7.99967 14.6667C4.31778 14.6667 1.33301 11.6819 1.33301 8.00004C1.33301 4.31814 4.31778 1.33337 7.99967 1.33337C9.04705 1.33337 10.038 1.5749 10.9199 2.0053M10.9199 13.9948C10.8358 13.9983 10.7513 14 10.6663 14C7.35263 14 4.66634 11.3137 4.66634 8.00004C4.66634 4.68633 7.35263 2.00004 10.6663 2.00004C10.7513 2.00004 10.8358 2.00181 10.9199 2.0053M10.9199 13.9948C11.9227 13.6253 12.9465 12.5119 13.333 12.0014C15.1104 9.63858 15.1108 6.36341 13.3342 4.00019C12.9473 3.48919 11.9997 2.53228 10.9199 2.0053"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
