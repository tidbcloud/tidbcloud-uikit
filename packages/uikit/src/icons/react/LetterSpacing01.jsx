import * as React from 'react'
import { forwardRef } from 'react'
const LetterSpacing01 = (props, ref) => {
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
        d="M9 13h6m-8 4 4.272-9.398c.231-.509.347-.763.507-.842a.5.5 0 0 1 .442 0c.16.079.276.333.507.842L17 17m4-14v18M3 3v18"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LetterSpacing01)
export default ForwardRef
