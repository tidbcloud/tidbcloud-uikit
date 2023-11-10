import * as React from 'react'
import { forwardRef } from 'react'
const Rocket01 = (props, ref) => {
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
        d="m13 11-9.5 9.5M14.018 3.538a22.613 22.613 0 0 1 3.483 2.855 22.61 22.61 0 0 1 2.876 3.515M9.255 7.896 6.38 6.938a1 1 0 0 0-.962.185L2.56 9.541a1 1 0 0 0 .3 1.701l2.708.998m6.113 6.112.997 2.708a1 1 0 0 0 1.702.3l2.417-2.857a1 1 0 0 0 .186-.962l-.959-2.875M19.348 2.27l-4.906.817a2.443 2.443 0 0 0-1.383.741L6.446 10.9a4.653 4.653 0 0 0 6.576 6.575l7.07-6.613c.391-.367.652-.853.74-1.382l.818-4.907a2 2 0 0 0-2.302-2.301Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(Rocket01)
export default ForwardRef
