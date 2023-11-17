import * as React from 'react'
import { forwardRef } from 'react'
const CurrencyRupee = (props, ref) => {
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
        d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CurrencyRupee)
export default ForwardRef
