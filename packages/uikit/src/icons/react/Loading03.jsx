import * as React from 'react'
import { forwardRef } from 'react'
const Loading03 = (props, ref) => {
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
        d="M3.34 17a4.773 4.773 0 0 1 1.458-6.34l.002-.002a4.778 4.778 0 0 1 5.484.094l3.432 2.496a4.778 4.778 0 0 0 5.485.094l.002-.002A4.77 4.77 0 0 0 20.66 7m-3.658 13.66a4.774 4.774 0 0 1-6.34-1.458l-.002-.003a4.778 4.778 0 0 1 .095-5.484l2.495-3.432a4.778 4.778 0 0 0 .094-5.484l-.004-.002A4.772 4.772 0 0 0 7 3.34M19.07 4.93c3.906 3.905 3.906 10.236 0 14.141-3.905 3.906-10.236 3.906-14.141 0-3.905-3.905-3.905-10.236 0-14.141 3.905-3.905 10.236-3.905 14.141 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Loading03)
export default ForwardRef
