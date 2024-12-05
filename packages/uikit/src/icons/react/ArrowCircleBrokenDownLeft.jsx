import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDownLeft = (props, ref) => {
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
        d="M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a10 10 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0s-3.905-10.237 0-14.142a10 10 0 0 1 9.66-2.59"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenDownLeft)
const ArrowCircleBrokenDownLeft = forwardRef((props, ref) => {
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
ArrowCircleBrokenDownLeft.displayName = 'IconArrowCircleBrokenDownLeft'
export default ArrowCircleBrokenDownLeft
