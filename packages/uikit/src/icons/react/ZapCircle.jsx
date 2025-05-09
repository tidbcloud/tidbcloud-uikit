import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZapCircle = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M7.99998 3.66671L4.90771 8.16456C4.72155 8.43533 4.62848 8.57071 4.63407 8.68325C4.63894 8.78126 4.68674 8.87214 4.76475 8.93168C4.85432 9.00004 5.01861 9.00004 5.3472 9.00004H7.99998V12.3334L11.0923 7.83552C11.2784 7.56475 11.3715 7.42937 11.3659 7.31683C11.361 7.21882 11.3132 7.12794 11.2352 7.0684C11.1456 7.00004 10.9813 7.00004 10.6528 7.00004H7.99998V3.66671Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6819 1.33337 7.99998 1.33337C4.31808 1.33337 1.33331 4.31814 1.33331 8.00004C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZapCircle)
const ZapCircle = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'ZapCircle', props.className].join(' ')}
    />
  )
})
ZapCircle.displayName = 'IconZapCircle'
export default ZapCircle
