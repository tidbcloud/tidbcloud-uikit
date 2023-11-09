import * as React from 'react'
import { forwardRef } from 'react'
const Cursor01 = (props, ref) => {
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
        d="m13 13 6 6m-1.036-8.249-5.01 1.702c-.138.047-.206.07-.263.109a.502.502 0 0 0-.129.129c-.04.057-.062.125-.109.262l-1.702 5.011c-.21.621-.316.932-.481 1.026a.5.5 0 0 1-.465.016c-.171-.083-.297-.386-.55-.992L3.747 4.794c-.234-.563-.351-.844-.294-1.02a.5.5 0 0 1 .321-.321c.176-.057.457.06 1.02.294l13.22 5.508c.606.253.909.379.992.55a.5.5 0 0 1-.016.465c-.094.165-.405.27-1.026.481Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Cursor01)
export default ForwardRef
