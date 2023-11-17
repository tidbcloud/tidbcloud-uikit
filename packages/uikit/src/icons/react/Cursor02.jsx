import * as React from 'react'
import { forwardRef } from 'react'
const Cursor02 = (props, ref) => {
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
        d="M20.506 10.775c.616-.24.925-.36 1.012-.53a.5.5 0 0 0-.006-.465c-.091-.168-.403-.28-1.026-.503L4.596 3.573c-.51-.183-.764-.275-.93-.217a.5.5 0 0 0-.31.309c-.057.167.034.421.217.931l5.704 15.89c.224.623.335.934.503 1.025a.5.5 0 0 0 .466.006c.17-.086.29-.395.53-1.012l2.596-6.677c.047-.121.07-.181.107-.232a.501.501 0 0 1 .117-.117c.05-.036.111-.06.232-.107l6.678-2.597Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Cursor02)
export default ForwardRef
