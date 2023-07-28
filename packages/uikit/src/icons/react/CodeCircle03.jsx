import * as React from 'react'
import { forwardRef } from 'react'
const CodeCircle03 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16" ref={ref} {...props}>
    <g clipPath="url(#prefix__a)">
      <path
        stroke="#52CC7A"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.334 10 2-2-2-2M5.667 6l-2 2 2 2m3-5.333-1.333 6.667M14.666 8A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0Z"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(CodeCircle03)
export default ForwardRef
