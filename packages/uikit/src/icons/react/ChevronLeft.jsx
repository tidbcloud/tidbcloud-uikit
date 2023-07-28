import * as React from 'react'
import { forwardRef } from 'react'
const ChevronLeft = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" />
  </svg>
)
const ForwardRef = forwardRef(ChevronLeft)
export default ForwardRef
