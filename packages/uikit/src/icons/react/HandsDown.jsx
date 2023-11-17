import * as React from 'react'
import { forwardRef } from 'react'
const HandsDown = (props, ref) => {
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
        d="M6.069 12.92V1.013m13.55 11.975h-5.5C16.25 20.61 12.653 21 12.653 21c-1.526 0-1.21-1.168-1.325-1.363 0-3.727-4.087-6.648-4.087-6.648l-5.55-.004c-.68 0-.69-.646-.69-.646l.68-10.66C1.68 1 2.382 1 2.382 1h15.164c.777 0 1.41 1.975 1.41 1.975C21 9.707 21 11.71 21 11.71c0 1.391-1.382 1.28-1.382 1.28Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HandsDown)
export default ForwardRef
