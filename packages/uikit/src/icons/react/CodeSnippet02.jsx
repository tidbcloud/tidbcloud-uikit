import * as React from 'react'
import { forwardRef } from 'react'
const CodeSnippet02 = (props, ref) => {
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
        d="m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CodeSnippet02)
export default ForwardRef
