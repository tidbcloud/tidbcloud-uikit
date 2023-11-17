import * as React from 'react'
import { forwardRef } from 'react'
const Database = (props, ref) => {
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
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="#F2AADA"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3.333c0 1.105-2.686 2-6 2s-6-.895-6-2m12 0c0-1.104-2.686-2-6-2s-6 .896-6 2m12 0v9.334c0 1.107-2.667 2-6 2s-6-.893-6-2V3.333M14 8c0 1.107-2.667 2-6 2s-6-.893-6-2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Database)
export default ForwardRef
