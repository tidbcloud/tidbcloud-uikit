import * as React from 'react'
import { forwardRef } from 'react'
const LockKeyholeCircle = (props, ref) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.732 13.195c-.071-.212-.106-.318-.104-.404a.422.422 0 0 1 .056-.22c.04-.077.146-.176.36-.374a3 3 0 1 0-4.086 0c.212.198.319.297.358.374.042.08.054.129.056.22.002.086-.033.192-.104.404l-.917 2.752c-.119.355-.178.533-.142.675a.5.5 0 0 0 .216.3c.123.078.31.078.685.078h3.78c.375 0 .562 0 .685-.078a.5.5 0 0 0 .216-.3c.036-.142-.024-.32-.142-.675l-.917-2.752Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LockKeyholeCircle)
export default ForwardRef
