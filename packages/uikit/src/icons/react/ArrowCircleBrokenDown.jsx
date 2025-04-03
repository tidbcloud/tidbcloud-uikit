import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDown = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M11.3335 2.22519C13.3262 3.37789 14.6668 5.53237 14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 5.53237 2.67416 3.37789 4.66683 2.22519M5.3335 7.99998L8.00016 10.6666M8.00016 10.6666L10.6668 7.99998M8.00016 10.6666V1.33331"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'ArrowCircleBrokenDown', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenDown.displayName = 'IconArrowCircleBrokenDown'
export default ArrowCircleBrokenDown
