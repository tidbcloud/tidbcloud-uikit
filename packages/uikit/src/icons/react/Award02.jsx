import * as React from 'react'
import { forwardRef } from 'react'
const Award02 = (props, ref) => {
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
        d="M7 15.09V22l4.703-1.881c.11-.044.165-.066.221-.075a.5.5 0 0 1 .152 0c.056.009.111.03.221.075L17 22v-6.91m2.5-5.59a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Award02)
export default ForwardRef
