import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenLeft = (props, ref) => {
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
        d="M13.7749 11.3334C12.6222 13.326 10.4678 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C10.4678 1.33337 12.6222 2.67404 13.7749 4.66671M8.00021 5.33337L5.33354 8.00004M5.33354 8.00004L8.00021 10.6667M5.33354 8.00004H14.6669"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenLeft)
const ArrowCircleBrokenLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenLeft', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenLeft.displayName = 'IconArrowCircleBrokenLeft'
export default ArrowCircleBrokenLeft
