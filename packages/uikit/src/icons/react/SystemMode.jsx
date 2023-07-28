import * as React from 'react'
import { forwardRef } from 'react'
const SystemMode = (props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="M16.38 20.992A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.96 9.96 0 0 1 4.38 1.008m0 17.984a9 9 0 1 1 0-17.984m0 17.984c1.505-.554 3.04-2.224 3.62-2.99A10.006 10.006 0 0 0 20.002 6c-.58-.766-2.002-2.202-3.622-2.992"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemMode)
export default ForwardRef
