import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronVerticalShrink = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6 3            L12 9            L18 3            M6 21            L12 15            L18 21"
        stroke="currentColor"
        strokeWidth="inherit"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronVerticalShrink)
const ChevronVerticalShrink = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChevronVerticalShrink', props.className].join(' ')}
    />
  )
})
ChevronVerticalShrink.displayName = 'IconChevronVerticalShrink'
export default ChevronVerticalShrink
