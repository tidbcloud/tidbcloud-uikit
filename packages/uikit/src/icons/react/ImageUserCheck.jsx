import * as React from 'react'
import { forwardRef } from 'react'
const ImageUserCheck = (props, ref) => {
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
        d="m16 5 2 2 4-4m0 9v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 22 18.88 22 17.2 22H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.72 2 18.88 2 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 2 5.12 2 6.8 2H12M2.146 19.926A4.002 4.002 0 0 1 6 17h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78M14 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ImageUserCheck)
export default ForwardRef
