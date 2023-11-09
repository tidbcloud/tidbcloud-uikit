import * as React from 'react'
import { forwardRef } from 'react'
const MusicNote01 = (props, ref) => {
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
        d="M9 18V6.355c0-.481 0-.722.088-.917a1 1 0 0 1 .358-.424c.178-.118.416-.158.891-.237l8.8-1.467c.64-.106.961-.16 1.211-.067a1 1 0 0 1 .52.44c.132.231.132.556.132 1.206V16M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MusicNote01)
export default ForwardRef
