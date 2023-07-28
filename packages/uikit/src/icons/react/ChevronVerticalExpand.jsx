import * as React from 'react'
import { forwardRef } from 'react'
const ChevronVerticalExpand = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="inherit"
      d="m6 9 6-6 6 6M6 15l6 6 6-6"
    />
  </svg>
)
const ForwardRef = forwardRef(ChevronVerticalExpand)
export default ForwardRef
