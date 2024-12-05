import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUpRight = (props, ref) => {
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
        d="M2.34 14.59a10 10 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142a10 10 0 0 1-9.66 2.59M15 15V9m0 0H9m6 0L5 19"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUpRight)
const ArrowCircleBrokenUpRight = forwardRef((props, ref) => {
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
ArrowCircleBrokenUpRight.displayName = 'IconArrowCircleBrokenUpRight'
export default ArrowCircleBrokenUpRight
