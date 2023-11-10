import * as React from 'react'
import { forwardRef } from 'react'
const BluetoothOff = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 17 6-5v10l5.44-4.533M12 7V2l6 5-2.918 2.432M21 21 3 3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BluetoothOff)
export default ForwardRef
