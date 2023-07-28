import * as React from 'react'
import { forwardRef } from 'react'
const Info2 = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M11.5 11.5v7h2v-7h-2Zm1 7v-7h-2v7h2ZM12 18a.5.5 0 0 1 .5.5h-2A1.5 1.5 0 0 0 12 20v-2Zm-.5.5a.5.5 0 0 1 .5-.5v2a1.5 1.5 0 0 0 1.5-1.5h-2ZM12 12a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 12 10v2Zm0-2a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Zm0-4v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2V6Zm0 0V4a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Z"
    />
  </svg>
)
const ForwardRef = forwardRef(Info2)
export default ForwardRef
