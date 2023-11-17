import * as React from 'react'
import { forwardRef } from 'react'
const HandsUp = (props, ref) => {
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
      strokeWidth="1.5"
      viewBox="0 0 22 22"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        d="M6.069 9.08v11.906M19.619 9.01h-5.5C16.25 1.39 12.653 1 12.653 1c-1.526 0-1.21 1.168-1.325 1.363 0 3.727-4.087 6.648-4.087 6.648l-5.55.004c-.68 0-.69.646-.69.646l.68 10.66c0 .679.702.679.702.679h15.164c.777 0 1.41-1.975 1.41-1.975C21 12.294 21 10.29 21 10.29c0-1.391-1.382-1.28-1.382-1.28Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HandsUp)
export default ForwardRef
