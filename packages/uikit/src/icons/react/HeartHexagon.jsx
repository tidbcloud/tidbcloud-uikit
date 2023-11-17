import * as React from 'react'
import { forwardRef } from 'react'
const HeartHexagon = (props, ref) => {
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
        d="M11.223 2.432c.284-.158.425-.237.575-.268a1 1 0 0 1 .403 0c.15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666v8.117c0 .343 0 .515-.05.667a1 1 0 0 1-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.267-.133.028-.27.028-.403 0-.15-.03-.292-.11-.576-.267l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.058V7.941c0-.342 0-.514.05-.666a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.997 9.068c-1-1.169-2.667-1.483-3.92-.413-1.252 1.07-1.429 2.86-.445 4.125.63.81 2.244 2.314 3.322 3.29.359.325.538.487.753.552.184.056.395.056.58 0 .214-.065.393-.227.752-.552 1.079-.976 2.692-2.48 3.322-3.29.984-1.265.829-3.066-.445-4.125-1.274-1.059-2.92-.756-3.92.413Z"
        clipRule="evenodd"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HeartHexagon)
export default ForwardRef
