import * as React from 'react'
import { forwardRef } from 'react'
const Atom02 = (props, ref) => {
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
        d="M17.115 15.358c-.27.306-.554.608-.851.905-4.296 4.296-9.678 5.88-12.021 3.536-1.607-1.606-1.368-4.641.325-7.775M6.89 8.725c.281-.32.578-.636.888-.947C12.074 3.482 17.456 1.9 19.8 4.243c1.608 1.607 1.367 4.645-.33 7.781m-3.206-4.246c4.296 4.296 5.88 9.678 3.536 12.021-2.343 2.343-7.725.76-12.02-3.535-4.297-4.296-5.88-9.678-3.536-12.021 2.343-2.343 7.725-.76 12.02 3.535ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Atom02)
export default ForwardRef
