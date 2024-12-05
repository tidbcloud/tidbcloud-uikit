import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRun = (props, ref) => {
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
        strokeLinejoin="round"
        d="M6.7 20.776c-.68-.383-.7-1.25-.7-1.734V5.33c0-.578 0-1.407.386-1.889.444-.555 1.24-.456 1.567-.386a.8.8 0 0 1 .271.123l11.063 7.665.026.019c.094.074.687.57.687 1.258 0 .671-.562 1.158-.679 1.253l-.038.027c-.473.313-10.703 7.077-11.183 7.376-.491.305-.88.292-1.4 0Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRun)
const Run = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Run.displayName = 'IconRun'
export default Run
