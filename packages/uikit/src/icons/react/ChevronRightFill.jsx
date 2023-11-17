import * as React from 'react'
import { forwardRef } from 'react'
const ChevronRightFill = (props, ref) => {
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
        fill="currentColor"
        d="M8.4 18.826c-.389-.298-.4-.973-.4-1.349V6.812c0-.449 0-1.094.22-1.469.221-.375.594-.366.81-.322a.63.63 0 0 1 .299.172l6.258 5.902a.466.466 0 0 1 .025.025c.066.072.388.451.388.974 0 .504-.3.875-.38.965a.465.465 0 0 1-.04.04c-.386.346-6.109 5.497-6.38 5.727-.28.237-.503.227-.8 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(ChevronRightFill)
export default ForwardRef
