import * as React from 'react'
import { forwardRef } from 'react'
const Signal03 = (props, ref) => {
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
        d="M10.586 13.414a2 2 0 1 1 2.828 0m-5.657 2.829a6 6 0 1 1 8.486 0M4.929 19.07c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Signal03)
export default ForwardRef
