import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDown = (props, ref) => {
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
        d="M17 3.338A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 5-8.662M8 12l4 4m0 0 4-4m-4 4V2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenDown)
const ArrowCircleBrokenDown = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ArrowCircleBrokenDown'].join(' ')}
    />
  )
})
ArrowCircleBrokenDown.displayName = 'IconArrowCircleBrokenDown'
export default ArrowCircleBrokenDown
