import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenRight = (props, ref) => {
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
        d="M2.22542 4.66671C3.37812 2.67404 5.5326 1.33337 8.00021 1.33337C11.6821 1.33337 14.6669 4.31814 14.6669 8.00004C14.6669 11.6819 11.6821 14.6667 8.00021 14.6667C5.5326 14.6667 3.37812 13.326 2.22542 11.3334M8.00016 10.6667L10.6668 8.00004M10.6668 8.00004L8.00016 5.33337M10.6668 8.00004H1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenRight)
const ArrowCircleBrokenRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenRight', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenRight.displayName = 'IconArrowCircleBrokenRight'
export default ArrowCircleBrokenRight
