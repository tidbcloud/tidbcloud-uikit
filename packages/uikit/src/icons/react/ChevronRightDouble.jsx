import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronRightDouble = (props, ref) => {
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
        d="m6 17 5-5-5-5m7 10 5-5-5-5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronRightDouble)
const ChevronRightDouble = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ChevronRightDouble'].join(' ')}
    />
  )
})
ChevronRightDouble.displayName = 'IconChevronRightDouble'
export default ChevronRightDouble
