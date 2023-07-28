import * as React from 'react'
import { forwardRef } from 'react'
const RunFill = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M6.7 20.776c-.68-.383-.7-1.25-.7-1.734V5.33c0-.578 0-1.407.386-1.889.444-.555 1.24-.456 1.567-.386a.757.757 0 0 1 .271.123l11.063 7.665a.545.545 0 0 1 .026.019c.094.074.687.57.687 1.258 0 .671-.562 1.158-.679 1.253a.43.43 0 0 1-.038.027c-.473.313-10.703 7.077-11.183 7.376-.491.305-.88.292-1.4 0Z"
    />
  </svg>
)
const ForwardRef = forwardRef(RunFill)
export default ForwardRef
