import * as React from 'react'
import { forwardRef } from 'react'
const Asterisk01 = (props, ref) => {
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
        d="M12 2v20m7.071-17.071L4.93 19.07M22 12H2m17.071 7.071L4.93 4.93"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Asterisk01)
export default ForwardRef
