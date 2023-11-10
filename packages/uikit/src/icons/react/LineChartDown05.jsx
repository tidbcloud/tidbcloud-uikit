import * as React from 'react'
import { forwardRef } from 'react'
const LineChartDown05 = (props, ref) => {
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
        d="m6 10 3.434 3.434c.198.198.297.297.411.334.1.033.21.033.31 0 .114-.037.213-.136.41-.334l2.87-2.868c.197-.198.296-.297.41-.334a.499.499 0 0 1 .31 0c.114.037.213.136.41.334L18 14m4-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LineChartDown05)
export default ForwardRef
