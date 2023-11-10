import * as React from 'react'
import { forwardRef } from 'react'
const BankNote01 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 11v4m12-6v4m-1-9c2.449 0 3.773.375 4.432.665a.708.708 0 0 1 .258.18c.076.072.215.284.25.383.06.165.06.255.06.435V16.41c0 .909 0 1.363-.136 1.597a.872.872 0 0 1-.532.44c-.255.089-.77-.01-1.8-.208-.72-.138-1.576-.24-2.532-.24-3 0-6 2-10 2-2.449 0-3.773-.375-4.432-.665-.088-.04-.132-.059-.258-.18a1.463 1.463 0 0 1-.25-.383C2 18.607 2 18.517 2 18.337V7.59c0-.909 0-1.363.136-1.597a.871.871 0 0 1 .532-.44c.255-.089.77.01 1.8.208C5.188 5.898 6.043 6 7 6c3 0 6-2 10-2Zm-2.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(BankNote01)
export default ForwardRef
