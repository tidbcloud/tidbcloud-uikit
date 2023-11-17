import * as React from 'react'
import { forwardRef } from 'react'
const CloudSun03 = (props, ref) => {
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
        d="M3.15 11a7.5 7.5 0 1 1 14.784-2.5M6 22a4 4 0 1 1 .337-7.986 6.003 6.003 0 0 1 10.866-1.004A4.5 4.5 0 1 1 17.5 22H6Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(CloudSun03)
export default ForwardRef
