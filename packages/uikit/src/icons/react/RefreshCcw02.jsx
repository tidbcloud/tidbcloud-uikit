import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw02 = (props, ref) => {
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
        d="M1.33325 6.66667C1.33325 6.66667 1.41413 6.10051 3.75728 3.75736C6.10042 1.41421 9.89941 1.41421 12.2426 3.75736C13.0727 4.58754 13.6088 5.60048 13.8507 6.66667M1.33325 6.66667V2.66667M1.33325 6.66667H5.33325M14.6666 9.33333C14.6666 9.33333 14.5857 9.8995 12.2426 12.2426C9.89941 14.5858 6.10042 14.5858 3.75728 12.2426C2.9271 11.4125 2.39105 10.3995 2.14914 9.33333M14.6666 9.33333V13.3333M14.6666 9.33333H10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw02)
const RefreshCcw02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw02', props.className].join(' ')}
    />
  )
})
RefreshCcw02.displayName = 'IconRefreshCcw02'
export default RefreshCcw02
