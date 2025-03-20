import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronVerticalExpand = (props, ref) => {
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
        strokeWidth="inherit"
        d="m6 9 6-6 6 6M6 15l6 6 6-6"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronVerticalExpand)
const ChevronVerticalExpand = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ChevronVerticalExpand'].join(' ')}
    />
  )
})
ChevronVerticalExpand.displayName = 'IconChevronVerticalExpand'
export default ChevronVerticalExpand
