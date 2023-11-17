import * as React from 'react'
import { forwardRef } from 'react'
const MenuRight = (props, ref) => {
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
        d="M3 12h12M3 5h12M3 19h12m3-10 3 3-3 3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MenuRight)
export default ForwardRef
