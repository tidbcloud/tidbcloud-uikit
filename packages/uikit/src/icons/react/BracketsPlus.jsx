import * as React from 'react'
import { forwardRef } from 'react'
const BracketsPlus = (props, ref) => {
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
        d="M18.57 20a2.286 2.286 0 0 0 2.287-2.286v-4.571L22 12l-1.143-1.143V6.286A2.285 2.285 0 0 0 18.57 4M5.429 4a2.285 2.285 0 0 0-2.286 2.286v4.571L2 12l1.143 1.143v4.571A2.285 2.285 0 0 0 5.429 20M12 8v8m-4-4h8"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BracketsPlus)
export default ForwardRef
