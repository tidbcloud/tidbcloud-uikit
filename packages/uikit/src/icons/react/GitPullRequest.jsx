import * as React from 'react'
import { forwardRef } from 'react'
const GitPullRequest = (props, ref) => {
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
        d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0V8a2 2 0 0 0-2-2h-3M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v12"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GitPullRequest)
export default ForwardRef
