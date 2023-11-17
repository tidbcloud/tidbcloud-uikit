import * as React from 'react'
import { forwardRef } from 'react'
const GitCommit = (props, ref) => {
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
        d="M16 12a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0h6M8 12H2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GitCommit)
export default ForwardRef
