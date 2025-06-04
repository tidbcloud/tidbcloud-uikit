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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2.2253 4.66665C3.378 2.67398 5.53248 1.33331 8.00009 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00009 14.6666C5.53248 14.6666 3.378 13.326 2.2253 11.3333M8.00004 10.6666L10.6667 7.99998M10.6667 7.99998L8.00004 5.33331M10.6667 7.99998H1.33337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
