import * as React from 'react'
import { forwardRef } from 'react'
const MediaGoogle = (props, ref) => {
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
        fill="#4285F4"
        d="M22.532 12.248c0-.725-.064-1.412-.174-2.081H12V14.3h5.93c-.265 1.357-1.044 2.502-2.2 3.281v2.75h3.54c2.07-1.915 3.262-4.739 3.262-8.085Z"
        strokeWidth="inherit"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.454-.99 7.27-2.668l-3.539-2.75c-.99.66-2.246 1.064-3.73 1.064-2.87 0-5.3-1.934-6.17-4.547H2.183v2.833C3.988 20.525 7.7 23 12 23Z"
        strokeWidth="inherit"
      />
      <path
        fill="#FBBC05"
        d="M5.83 14.1a6.384 6.384 0 0 1-.348-2.1c0-.733.129-1.44.349-2.1V7.069H2.182a10.873 10.873 0 0 0 0 9.864l3.649-2.833Z"
        strokeWidth="inherit"
      />
      <path
        fill="#EA4335"
        d="M12 5.354c1.623 0 3.071.56 4.217 1.65l3.135-3.135C17.454 2.091 14.97 1 12 1 7.7 1 3.988 3.475 2.183 7.068L5.83 9.901C6.7 7.288 9.13 5.354 12 5.354Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(MediaGoogle)
export default ForwardRef
