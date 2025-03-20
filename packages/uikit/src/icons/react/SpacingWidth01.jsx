import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpacingWidth01 = (props, ref) => {
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
        d="M6 12h12M6 12l2-3m-2 3 2 3m10-3-2-3m2 3-2 3m5 6V3M3 21V3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpacingWidth01)
const SpacingWidth01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SpacingWidth01'].join(' ')}
    />
  )
})
SpacingWidth01.displayName = 'IconSpacingWidth01'
export default SpacingWidth01
