import * as React from 'react'
import { forwardRef } from 'react'
const Variable = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16" ref={ref} {...props}>
    <path
      stroke="#2E6BE5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.27 14a13.502 13.502 0 0 0 1.397-6c0-2.155-.503-4.193-1.396-6M2.729 2a13.502 13.502 0 0 0-1.396 6c0 2.155.503 4.193 1.396 6m8.304-8.25h-.06c-.436 0-.85.191-1.133.524l-3.583 4.202A1.489 1.489 0 0 1 5.124 11h-.06m.746-5.25h.93c.333 0 .625.222.717.544l1.183 4.162a.747.747 0 0 0 .717.544h.93"
    />
  </svg>
)
const ForwardRef = forwardRef(Variable)
export default ForwardRef
