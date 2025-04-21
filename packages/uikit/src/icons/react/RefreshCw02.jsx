import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw02 = (props, ref) => {
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
        d="M1.33325 9.33333C1.33325 9.33333 1.41413 9.8995 3.75728 12.2426C6.10042 14.5858 9.89941 14.5858 12.2426 12.2426C13.0727 11.4125 13.6088 10.3995 13.8507 9.33333M1.33325 9.33333V13.3333M1.33325 9.33333H5.33325M14.6666 6.66667C14.6666 6.66667 14.5857 6.10051 12.2426 3.75736C9.89941 1.41421 6.10042 1.41421 3.75728 3.75736C2.9271 4.58754 2.39105 5.60048 2.14914 6.66667M14.6666 6.66667V2.66667M14.6666 6.66667H10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw02)
const RefreshCw02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw02', props.className].join(' ')}
    />
  )
})
RefreshCw02.displayName = 'IconRefreshCw02'
export default RefreshCw02
