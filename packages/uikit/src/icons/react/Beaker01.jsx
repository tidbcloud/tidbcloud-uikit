import * as React from 'react'
import { forwardRef } from 'react'
const Beaker01 = (props, ref) => {
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
        d="M10 2v4.66c0 .218 0 .326-.033.413a.47.47 0 0 1-.138.198c-.07.06-.183.102-.409.185a7.5 7.5 0 1 0 5.16 0c-.226-.083-.339-.125-.409-.185a.469.469 0 0 1-.138-.198C14 6.986 14 6.878 14 6.66V2M8.5 2h7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Beaker01)
export default ForwardRef
