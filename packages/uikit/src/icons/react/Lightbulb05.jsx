import * as React from 'react'
import { forwardRef } from 'react'
const Lightbulb05 = (props, ref) => {
  if (typeof props.size === 'number') {
    props = {
      ...props,
      height: props.size,
      width: props.width
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v1m-9 9H2m3.5-6.5-.6-.6m13.6.6.6-.6M22 12h-1m-11 1.5h4m-2 0v5m3.5-1.626a6 6 0 1 0-7 0V18.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C10.02 22 10.58 22 11.7 22h.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-1.926Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Lightbulb05)
export default ForwardRef
