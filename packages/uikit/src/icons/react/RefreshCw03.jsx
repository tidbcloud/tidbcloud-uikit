import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw03 = (props, ref) => {
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
        d="M9.33333 14.6667C9.33333 14.6667 9.8995 14.5858 12.2426 12.2427C14.5858 9.89954 14.5858 6.10055 12.2426 3.7574C11.4125 2.92722 10.3995 2.39117 9.33333 2.14926M9.33333 14.6667H13.3333M9.33333 14.6667L9.33333 10.6667M6.66667 1.3335C6.66667 1.3335 6.1005 1.41439 3.75736 3.75753C1.41421 6.10068 1.41421 9.89967 3.75736 12.2428C4.58754 13.073 5.60048 13.609 6.66667 13.851M6.66667 1.3335L2.66667 1.33337M6.66667 1.3335L6.66667 5.33337"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw03)
const RefreshCw03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw03', props.className].join(' ')}
    />
  )
})
RefreshCw03.displayName = 'IconRefreshCw03'
export default RefreshCw03
