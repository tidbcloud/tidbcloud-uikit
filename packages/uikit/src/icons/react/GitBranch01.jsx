import * as React from 'react'
import { forwardRef } from 'react'
const GitBranch01 = (props, ref) => {
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
        d="M3 3v10.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 18 6.12 18 7.8 18H15m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GitBranch01)
export default ForwardRef
