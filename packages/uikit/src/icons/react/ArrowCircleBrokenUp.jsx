import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUp = (props, ref) => {
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
        d="M4.66671 13.7748C2.67404 12.6221 1.33337 10.4676 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 10.4676 13.326 12.6221 11.3334 13.7748M10.6667 8.00003L8.00004 5.33336M8.00004 5.33336L5.33337 8.00003M8.00004 5.33336V14.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'ArrowCircleBrokenUp', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenUp.displayName = 'IconArrowCircleBrokenUp'
export default ArrowCircleBrokenUp
