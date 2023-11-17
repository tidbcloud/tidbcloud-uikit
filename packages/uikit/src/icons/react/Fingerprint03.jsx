import * as React from 'react'
import { forwardRef } from 'react'
const Fingerprint03 = (props, ref) => {
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
        d="M8.1 21.221a12.16 12.16 0 0 1-2.207-7.002 6.108 6.108 0 0 1 6.106-6.11 6.108 6.108 0 0 1 6.106 6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.1 21.221a12.16 12.16 0 0 1-2.207-7.002 6.108 6.108 0 0 1 6.106-6.11 6.108 6.108 0 0 1 6.106 6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.436 20.312c-.11.006-.218.016-.329.016a6.108 6.108 0 0 1-6.106-6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.436 20.312c-.11.006-.218.016-.329.016a6.108 6.108 0 0 1-6.106-6.11"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.27 22a9.158 9.158 0 0 1-4.323-7.781 3.054 3.054 0 1 1 6.107 0 3.054 3.054 0 1 0 6.108 0c0-5.062-4.102-9.164-9.16-9.164-5.059 0-9.16 4.102-9.16 9.164 0 1.128.126 2.226.358 3.286"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.27 22a9.158 9.158 0 0 1-4.323-7.781 3.054 3.054 0 1 1 6.107 0 3.054 3.054 0 1 0 6.108 0c0-5.062-4.102-9.164-9.16-9.164-5.059 0-9.16 4.102-9.16 9.164 0 1.128.126 2.226.358 3.286"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.526 5.863A11.327 11.327 0 0 0 12 2a11.327 11.327 0 0 0-8.525 3.863"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.526 5.863A11.327 11.327 0 0 0 12 2a11.327 11.327 0 0 0-8.525 3.863"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Fingerprint03)
export default ForwardRef
