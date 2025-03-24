import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowNarrowDownLeft = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M18 6L6 18M6 18H14M6 18V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowNarrowDownLeft)
const ArrowNarrowDownLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowNarrowDownLeft', props.className].join(' ')}
    />
  )
})
ArrowNarrowDownLeft.displayName = 'IconArrowNarrowDownLeft'
export default ArrowNarrowDownLeft
