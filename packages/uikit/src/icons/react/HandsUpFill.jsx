import * as React from 'react'
import { forwardRef } from 'react'
const HandsUpFill = (props, ref) => {
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
      viewBox="0 0 22 22"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.994 8.5H14c3-8-1.6-8-1.6-8-1.322 0-1.376.774-1.405 1.195-.007.109-.013.194-.04.236 0 2.969-2.563 5.45-3.801 6.476 0 0-.654.578-.654 1.357V20.01c0 1.473.323 1.475 2.162 1.49H17.5c1 0 1.772-2.074 1.772-2.074 2.228-7.068 2.228-9.17 2.228-9.17 0-1.461-1.506-1.756-1.506-1.756ZM1.5 8.5h3.051s.851-.01.851.849V20.01c0 1.474-.562 1.474-1.247 1.474-.37 0-.677.004-.96.008-.24.004-.465.007-.695.007-.5 0-1.308-.5-1.308-1.5 0-.586-.238-3.745-.434-6.363C.618 11.787.5 10.207.5 10c0-.5 0-1.5 1-1.5Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HandsUpFill)
export default ForwardRef
