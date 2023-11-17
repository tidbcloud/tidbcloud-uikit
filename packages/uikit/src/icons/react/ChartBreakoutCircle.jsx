import * as React from 'react'
import { forwardRef } from 'react'
const ChartBreakoutCircle = (props, ref) => {
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
        d="M15.5 3.5V2m3.94 2.56L20.5 3.5m.01 5h1.5m-.06 4.5c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95M12 8h4v4m-.38-4A12.984 12.984 0 0 1 5 13.5c-1.003 0-1.98-.114-2.917-.329"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ChartBreakoutCircle)
export default ForwardRef
