import * as React from 'react'
import { forwardRef } from 'react'
const Train = (props, ref) => {
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
        d="M9.5 22h5M8 2h8m-4 3V2M4 12h16m-3 7 1.5 3M7 19l-1.5 3m3-6.5h.01m6.99 0h.01M8.8 19h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 16.72 20 15.88 20 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 5 16.88 5 15.2 5H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 7.28 4 8.12 4 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 19 7.12 19 8.8 19Zm.2-3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Train)
export default ForwardRef
