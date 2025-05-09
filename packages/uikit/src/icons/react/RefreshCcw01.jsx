import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33325 6.66667C1.33325 6.66667 2.66991 4.84548 3.75581 3.75883C4.84171 2.67218 6.34232 2 7.99992 2C11.3136 2 13.9999 4.68629 13.9999 8C13.9999 11.3137 11.3136 14 7.99992 14C5.26452 14 2.95666 12.1695 2.23443 9.66667M1.33325 6.66667V2.66667M1.33325 6.66667H5.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw01)
const RefreshCcw01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw01', props.className].join(' ')}
    />
  )
})
RefreshCcw01.displayName = 'IconRefreshCcw01'
export default RefreshCcw01
