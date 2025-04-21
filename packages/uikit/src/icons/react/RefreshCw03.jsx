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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M9.33333 14.6666C9.33333 14.6666 9.8995 14.5858 12.2426 12.2426C14.5858 9.89947 14.5858 6.10049 12.2426 3.75734C11.4125 2.92716 10.3995 2.39111 9.33333 2.1492M9.33333 14.6666H13.3333M9.33333 14.6666L9.33333 10.6666M6.66667 1.33344C6.66667 1.33344 6.1005 1.41432 3.75736 3.75747C1.41421 6.10062 1.41421 9.89961 3.75736 12.2428C4.58754 13.0729 5.60048 13.609 6.66667 13.8509M6.66667 1.33344L2.66667 1.33331M6.66667 1.33344L6.66667 5.33331"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
