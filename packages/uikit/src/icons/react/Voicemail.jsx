import * as React from 'react'
import { forwardRef } from 'react'
const Voicemail = (props, ref) => {
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
        d="M6 16h12M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Voicemail)
export default ForwardRef
