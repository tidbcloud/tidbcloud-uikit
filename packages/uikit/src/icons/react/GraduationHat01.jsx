import * as React from 'react'
import { forwardRef } from 'react'
const GraduationHat01 = (props, ref) => {
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
        d="M5 10v6.011c0 .36 0 .539.055.697a1 1 0 0 0 .23.374c.118.12.278.2.6.36l5.4 2.7c.262.131.393.197.53.223.123.023.248.023.37 0 .137-.026.268-.091.53-.223l5.4-2.7c.322-.16.482-.24.6-.36a.999.999 0 0 0 .23-.374c.055-.158.055-.338.055-.697v-6.01M2 8.5l9.642-4.822c.131-.066.197-.098.266-.111a.5.5 0 0 1 .184 0c.069.013.135.045.266.11L22 8.5l-9.642 4.821c-.131.066-.197.099-.266.111a.501.501 0 0 1-.184 0c-.069-.012-.135-.045-.266-.11L2 8.5Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(GraduationHat01)
export default ForwardRef
