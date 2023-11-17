import * as React from 'react'
import { forwardRef } from 'react'
const CurrencyPound = (props, ref) => {
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
        d="M17.5 20.5h-11s3.5-2.759 3.5-7c0-2.828-2.086-3.839-2.116-6.195.002-4.664 5.617-4.416 7.568-2.562M6.5 13.5H15"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CurrencyPound)
export default ForwardRef
