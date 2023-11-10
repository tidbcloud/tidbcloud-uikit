import * as React from 'react'
import { forwardRef } from 'react'
const ChevronSelectorHorizontal = (props, ref) => {
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
        d="m9 7-5 5 5 5m6-10 5 5-5 5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ChevronSelectorHorizontal)
export default ForwardRef
