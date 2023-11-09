import * as React from 'react'
import { forwardRef } from 'react'
const LineChartDown04 = (props, ref) => {
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
        d="m3 9 6.655 4.754a.5.5 0 0 0 .645-.053l3.4-3.402a.5.5 0 0 1 .645-.053L21 15M6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LineChartDown04)
export default ForwardRef
