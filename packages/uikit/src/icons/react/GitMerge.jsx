import * as React from 'react'
import { forwardRef } from 'react'
const GitMerge = (props, ref) => {
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
        d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm0 0a9 9 0 0 1-9-9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v12"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GitMerge)
export default ForwardRef
