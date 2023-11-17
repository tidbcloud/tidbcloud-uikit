import * as React from 'react'
import { forwardRef } from 'react'
const LogOut03 = (props, ref) => {
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
        d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .296 0 .443-.011.571a3 3 0 0 1-2.404 2.686c-.126.025-.273.042-.567.074l-1.021.114c-1.535.17-2.302.256-2.911.06a3 3 0 0 1-1.825-1.633C3 18.288 3 17.516 3 15.972V8.028c0-1.544 0-2.316.261-2.9a3 3 0 0 1 1.825-1.634c.61-.195 1.376-.11 2.91.061l1.022.114c.294.032.441.049.567.074a3 3 0 0 1 2.404 2.686c.011.128.011.275.011.57"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LogOut03)
export default ForwardRef
