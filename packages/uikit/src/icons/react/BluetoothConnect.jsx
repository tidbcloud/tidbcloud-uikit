import * as React from 'react'
import { forwardRef } from 'react'
const BluetoothConnect = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
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
        d="m3 7 12 10-6 5V2l6 5L3 17m15-5h.01M15 12h.01M21 12h.01"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BluetoothConnect)
export default ForwardRef
