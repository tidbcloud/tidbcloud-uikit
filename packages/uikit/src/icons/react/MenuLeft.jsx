import * as React from 'react'
import { forwardRef } from 'react'
const MenuLeft = (props, ref) => {
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
        d="M9 12h12M9 5h12M9 19h12M6 9l-3 3 3 3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MenuLeft)
export default ForwardRef
