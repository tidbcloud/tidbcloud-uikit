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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 9.33333C1.3335 9.33333 1.41438 9.8995 3.75752 12.2426C6.10067 14.5858 9.89966 14.5858 12.2428 12.2426C13.073 11.4125 13.609 10.3995 13.8509 9.33333M1.3335 9.33333V13.3333M1.3335 9.33333H5.3335M14.6668 6.66667C14.6668 6.66667 14.5859 6.10051 12.2428 3.75736C9.89966 1.41421 6.10067 1.41421 3.75752 3.75736C2.92734 4.58754 2.39129 5.60048 2.14938 6.66667M14.6668 6.66667V2.66667M14.6668 6.66667H10.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
