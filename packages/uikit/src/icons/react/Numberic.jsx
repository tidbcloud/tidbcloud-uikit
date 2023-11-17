import * as React from 'react'
import { forwardRef } from 'react'
const Numberic = (props, ref) => {
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
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#prefix__a)">
        <path
          stroke="#999"
          strokeLinecap="round"
          d="M1.333 4.975h13.334M1.334 10.992h13.333M5.99 1.333 3.673 14.667m8.243-13.334L9.6 14.667"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h16v16H0z" strokeWidth="inherit" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(Numberic)
export default ForwardRef
