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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 6.66667C1.3335 6.66667 1.41438 6.10051 3.75752 3.75736C6.10067 1.41421 9.89966 1.41421 12.2428 3.75736C13.073 4.58754 13.609 5.60048 13.8509 6.66667M1.3335 6.66667V2.66667M1.3335 6.66667H5.3335M14.6668 9.33333C14.6668 9.33333 14.5859 9.8995 12.2428 12.2426C9.89966 14.5858 6.10067 14.5858 3.75752 12.2426C2.92734 11.4125 2.39129 10.3995 2.14938 9.33333M14.6668 9.33333V13.3333M14.6668 9.33333H10.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
