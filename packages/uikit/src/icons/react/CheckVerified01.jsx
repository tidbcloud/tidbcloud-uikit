import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckVerified01 = (props, ref) => {
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
        d="m9 12 2 2 4.5-4.5M7.334 3.819a3.83 3.83 0 0 0 2.18-.904 3.83 3.83 0 0 1 4.972 0c.613.523 1.376.84 2.18.904a3.83 3.83 0 0 1 3.515 3.515c.064.804.38 1.567.904 2.18a3.83 3.83 0 0 1 0 4.972 3.83 3.83 0 0 0-.904 2.18 3.83 3.83 0 0 1-3.515 3.515 3.83 3.83 0 0 0-2.18.904 3.83 3.83 0 0 1-4.972 0 3.83 3.83 0 0 0-2.18-.904 3.83 3.83 0 0 1-3.515-3.515 3.83 3.83 0 0 0-.904-2.18 3.83 3.83 0 0 1 0-4.972c.523-.613.84-1.376.904-2.18a3.83 3.83 0 0 1 3.515-3.515"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckVerified01)
const CheckVerified01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CheckVerified01'].join(' ')}
    />
  )
})
CheckVerified01.displayName = 'IconCheckVerified01'
export default CheckVerified01
