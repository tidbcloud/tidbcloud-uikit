import * as React from 'react'
import { forwardRef } from 'react'
const Minus = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
  </svg>
)
const ForwardRef = forwardRef(Minus)
export default ForwardRef
