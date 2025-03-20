import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpacingHeight02 = (props, ref) => {
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
        d="M21 3H3m18 18H3m9-3.5v-11m3 0H9m6 11H9"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpacingHeight02)
const SpacingHeight02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SpacingHeight02'].join(' ')}
    />
  )
})
SpacingHeight02.displayName = 'IconSpacingHeight02'
export default SpacingHeight02
