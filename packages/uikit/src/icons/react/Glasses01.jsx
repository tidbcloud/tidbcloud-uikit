import * as React from 'react'
import { forwardRef } from 'react'
const Glasses01 = (props, ref) => {
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
        d="M10 11.535a4.008 4.008 0 0 1 4 0M8.828 9.172a4 4 0 1 1-5.657 5.656 4 4 0 0 1 5.657-5.656Zm12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Glasses01)
export default ForwardRef
