import * as React from 'react'
import { forwardRef } from 'react'
const AlignVerticalCenter01 = (props, ref) => {
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
        d="M3 12h18M12 2v6.5m0 0 4-4m-4 4-4-4M12 22v-6.5m0 0 4 4m-4-4-4 4"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(AlignVerticalCenter01)
export default ForwardRef
