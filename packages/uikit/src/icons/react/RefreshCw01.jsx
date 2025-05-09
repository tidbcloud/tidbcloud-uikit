import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw01 = (props, ref) => {
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
        d="M13.9999 6.66667C13.9999 6.66667 12.6633 4.84548 11.5774 3.75883C10.4915 2.67218 8.99085 2 7.33325 2C4.01954 2 1.33325 4.68629 1.33325 8C1.33325 11.3137 4.01954 14 7.33325 14C10.0686 14 12.3765 12.1695 13.0987 9.66667M13.9999 6.66667V2.66667M13.9999 6.66667H9.99992"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw01)
const RefreshCw01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw01', props.className].join(' ')}
    />
  )
})
RefreshCw01.displayName = 'IconRefreshCw01'
export default RefreshCw01
