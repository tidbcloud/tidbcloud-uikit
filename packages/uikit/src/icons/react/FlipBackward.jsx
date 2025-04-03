import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlipBackward = (props, ref) => {
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
        d="M2 5.99998H11C12.6569 5.99998 14 7.34313 14 8.99998C14 10.6568 12.6569 12 11 12H8M2 5.99998L4.66667 3.33331M2 5.99998L4.66667 8.66665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlipBackward)
const FlipBackward = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FlipBackward', props.className].join(' ')}
    />
  )
})
FlipBackward.displayName = 'IconFlipBackward'
export default FlipBackward
