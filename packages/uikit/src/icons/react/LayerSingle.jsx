import * as React from 'react'
import { forwardRef } from 'react'
const LayerSingle = (props, ref) => {
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
        d="M12.358 7.179c-.131-.066-.197-.098-.266-.111a.5.5 0 0 0-.184 0c-.069.013-.135.045-.266.111L2 12l9.642 4.821c.131.066.197.099.266.111.06.012.123.012.184 0 .069-.012.135-.045.266-.11L22 12 12.358 7.18Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(LayerSingle)
export default ForwardRef
