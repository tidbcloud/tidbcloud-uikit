import * as React from 'react'
import { forwardRef } from 'react'
const Hexagon02 = (props, ref) => {
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
        d="M21.568 11.223c.157.284.236.425.267.575a.998.998 0 0 1 0 .403c-.03.15-.11.292-.267.576l-4.111 7.4c-.167.3-.25.45-.368.558a1 1 0 0 1-.364.215c-.153.05-.324.05-.667.05H7.941c-.343 0-.514 0-.667-.05a1 1 0 0 1-.364-.215c-.118-.109-.201-.258-.368-.558l-4.11-7.4c-.158-.284-.237-.425-.268-.575a1 1 0 0 1 0-.403c.03-.15.11-.292.267-.576l4.111-7.4c.167-.3.25-.45.368-.558a1 1 0 0 1 .364-.215C7.427 3 7.598 3 7.941 3h8.117c.343 0 .514 0 .667.05a1 1 0 0 1 .364.215c.118.109.201.258.368.558l4.11 7.4Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Hexagon02)
export default ForwardRef
