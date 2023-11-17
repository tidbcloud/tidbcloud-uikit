import * as React from 'react'
import { forwardRef } from 'react'
const Trash03 = (props, ref) => {
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
        d="M9 3h6M3 6h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.485c-.34-.598-.394-1.387-.499-2.966L5 6m5 4.5v5m4-5v5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Trash03)
export default ForwardRef
