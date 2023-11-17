import * as React from 'react'
import { forwardRef } from 'react'
const ZapFast = (props, ref) => {
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
        d="M9 17.5H3.5m3-5.5H2m7-5.5H4M17 3l-6.596 9.235c-.292.409-.438.613-.432.784a.5.5 0 0 0 .194.377c.135.104.386.104.889.104H16L15 21l6.596-9.235c.292-.409.438-.613.432-.784a.5.5 0 0 0-.194-.377c-.135-.104-.386-.104-.889-.104H16L17 3Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ZapFast)
export default ForwardRef
