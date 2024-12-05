import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUpLeft = (props, ref) => {
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
        d="M14.59 21.66a10 10 0 0 1-9.661-2.589c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0a10 10 0 0 1 2.59 9.66M9 15V9m0 0h6M9 9 19 19"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUpLeft)
const ArrowCircleBrokenUpLeft = forwardRef((props, ref) => {
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
ArrowCircleBrokenUpLeft.displayName = 'IconArrowCircleBrokenUpLeft'
export default ArrowCircleBrokenUpLeft
