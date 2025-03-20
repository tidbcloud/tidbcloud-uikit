import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlipBackward = (props, ref) => {
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
        d="M3 9h13.5a4.5 4.5 0 1 1 0 9H12M3 9l4-4M3 9l4 4"
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
      className={[props.className, 'tiui-icon', 'FlipBackward'].join(' ')}
    />
  )
})
FlipBackward.displayName = 'IconFlipBackward'
export default FlipBackward
