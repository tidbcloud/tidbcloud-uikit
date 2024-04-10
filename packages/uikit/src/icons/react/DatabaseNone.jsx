import * as React from 'react'
import { forwardRef } from 'react'
const DatabaseNone = (props, ref) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14 3.33334C14 4.43791 11.3137 5.33334 8 5.33334C4.68629 5.33334 2 4.43791 2 3.33334M14 3.33334C14 2.22877 11.3137 1.33334 8 1.33334C4.68629 1.33334 2 2.22877 2 3.33334M14 3.33334V12.6667C14 13.7733 11.3333 14.6667 8 14.6667C4.66667 14.6667 2 13.7733 2 12.6667V3.33334M14 8.00001C14 9.10668 11.3333 10 8 10C4.66667 10 2 9.10668 2 8.00001"
        stroke-width="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(DatabaseNone)
export default ForwardRef
