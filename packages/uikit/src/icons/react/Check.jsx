import * as React from 'react'
import { forwardRef } from 'react'
const Check = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7 9 18l-5-5" />
  </svg>
)
const ForwardRef = forwardRef(Check)
export default ForwardRef
