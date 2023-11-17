import * as React from 'react'
import { forwardRef } from 'react'
const Lightning02 = (props, ref) => {
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
        d="M14.25 2H8.493c-.18 0-.27 0-.348.027a.5.5 0 0 0-.187.116c-.06.058-.1.139-.18.3l-4.2 8.4c-.192.383-.288.574-.265.73a.5.5 0 0 0 .208.337c.129.09.343.09.772.09h6.205l-3 10L19.694 9.355c.411-.426.617-.64.629-.822a.5.5 0 0 0-.177-.415C20.005 8 19.71 8 19.117 8h-7.118l2.25-6Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Lightning02)
export default ForwardRef
