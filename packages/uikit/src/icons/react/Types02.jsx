import * as React from 'react'
import { forwardRef } from 'react'
const Types02 = (props, ref) => {
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
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path
        stroke="#C2AAF2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.667 4.667c0-.622 0-.932.101-1.177.135-.327.395-.587.722-.722.245-.101.555-.101 1.176-.101h6.667c.621 0 .932 0 1.177.101.327.135.586.395.722.722.101.245.101.555.101 1.176m-8 8.667h5.333M6.833 2.666v10.667M9.166 2.667v10.666"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Types02)
export default ForwardRef
