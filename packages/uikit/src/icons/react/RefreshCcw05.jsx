import * as React from 'react'
import { forwardRef } from 'react'
const RefreshCcw05 = (props, ref) => {
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
        d="M8.547 19.767A8.5 8.5 0 0 0 19.362 7.75l-.25-.433M4.638 16.25A8.5 8.5 0 0 1 15.453 4.233m-12.96 12.1 2.732.733.733-2.732m12.085-4.668.732-2.732 2.732.732"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(RefreshCcw05)
export default ForwardRef
