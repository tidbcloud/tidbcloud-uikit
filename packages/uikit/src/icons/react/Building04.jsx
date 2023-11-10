import * as React from 'react'
import { forwardRef } from 'react'
const Building04 = (props, ref) => {
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
        d="M9.5 7h5m-5 4h5m-5 4h5m3.5 6V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2V21m14 0H4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Building04)
export default ForwardRef
