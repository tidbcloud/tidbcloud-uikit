import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUp = (props, ref) => {
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
        d="M7 20.662A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5 8.662M16 12l-4-4m0 0-4 4m4-4v14"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUp)
const ArrowCircleBrokenUp = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ArrowCircleBrokenUp'].join(' ')}
    />
  )
})
ArrowCircleBrokenUp.displayName = 'IconArrowCircleBrokenUp'
export default ArrowCircleBrokenUp
