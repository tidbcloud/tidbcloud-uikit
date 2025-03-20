import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotpoints02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 5H10m11 14H10m11-7H10M6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotpoints02)
const Dotpoints02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Dotpoints02'].join(' ')}
    />
  )
})
Dotpoints02.displayName = 'IconDotpoints02'
export default Dotpoints02
