import * as React from 'react'
import { forwardRef } from 'react'
const MessageSquare02 = (props, ref) => {
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
        d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 18 17.88 18 16.2 18h-2.516c-.624 0-.936 0-1.235.061a2.997 2.997 0 0 0-.761.267c-.272.14-.516.334-1.003.724L8.3 20.96c-.416.333-.624.5-.8.5a.5.5 0 0 1-.39-.188C7 21.135 7 20.868 7 20.336V18c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C3 15.395 3 14.93 3 14V7.8Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MessageSquare02)
export default ForwardRef
