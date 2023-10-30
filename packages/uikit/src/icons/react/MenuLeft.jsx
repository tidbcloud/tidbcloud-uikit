import * as React from 'react'
import { forwardRef } from 'react'
const MenuLeft = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h12M9 5h12M9 19h12M6 9l-3 3 3 3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MenuLeft)
export default ForwardRef
