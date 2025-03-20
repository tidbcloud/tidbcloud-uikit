import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDownRight = (props, ref) => {
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
        d="M9.41 2.34a10 10 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0a10 10 0 0 1-2.59-9.66M15 9v6m0 0H9m6 0L5 5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenDownRight)
const ArrowCircleBrokenDownRight = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ArrowCircleBrokenDownRight'].join(' ')}
    />
  )
})
ArrowCircleBrokenDownRight.displayName = 'IconArrowCircleBrokenDownRight'
export default ArrowCircleBrokenDownRight
