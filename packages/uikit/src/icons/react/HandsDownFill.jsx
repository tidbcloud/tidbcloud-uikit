import * as React from 'react'
import { forwardRef } from 'react'
const HandsDownFill = (props, ref) => {
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
      viewBox="0 0 22 22"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.994 13.5H14c3 8-1.6 8-1.6 8-1.322 0-1.376-.774-1.405-1.195-.007-.109-.013-.194-.04-.236 0-2.969-2.563-5.45-3.801-6.476 0 0-.654-.578-.654-1.357V1.99C6.5.517 6.823.515 8.662.5H17.5c1 0 1.772 2.074 1.772 2.074 2.228 7.068 2.228 9.17 2.228 9.17 0 1.461-1.506 1.756-1.506 1.756ZM1.5 13.5h3.051s.851.01.851-.849V1.99C5.402.515 4.84.515 4.155.515c-.37 0-.677-.004-.96-.008C2.956.503 2.73.5 2.5.5 2 .5 1.192 1 1.192 2c0 .586-.238 3.745-.434 6.362C.618 10.213.5 11.792.5 12c0 .5 0 1.5 1 1.5Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HandsDownFill)
export default ForwardRef
