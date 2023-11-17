import * as React from 'react'
import { forwardRef } from 'react'
const SunSetting01 = (props, ref) => {
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
        d="M12 3v2M5.314 7.314 3.9 5.9m14.786 1.414L20.1 5.9M6 15a6 6 0 0 1 12 0m4 0H2m17 4H5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SunSetting01)
export default ForwardRef
