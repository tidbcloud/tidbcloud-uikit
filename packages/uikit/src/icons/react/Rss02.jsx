import * as React from 'react'
import { forwardRef } from 'react'
const Rss02 = (props, ref) => {
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
        d="M3 13.023c5.185-.78 8.756 2.792 7.977 7.977M3 8.038c7.938-.78 13.742 5.024 12.962 12.962M3 3.052C13.692 2.274 21.726 10.308 20.948 21M5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Rss02)
export default ForwardRef
