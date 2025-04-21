import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw03 = (props, ref) => {
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
        d="M9.33333 1.33331C9.33333 1.33331 9.8995 1.41419 12.2426 3.75734C14.5858 6.10049 14.5858 9.89947 12.2426 12.2426C11.4125 13.0728 10.3995 13.6089 9.33333 13.8508M9.33333 1.33331L13.3333 1.33331M9.33333 1.33331L9.33333 5.33331M6.66667 14.6665C6.66667 14.6665 6.10051 14.5856 3.75736 12.2425C1.41421 9.89934 1.41421 6.10035 3.75736 3.75721C4.58754 2.92703 5.60048 2.39098 6.66667 2.14907M6.66667 14.6665L2.66667 14.6666M6.66667 14.6665L6.66667 10.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw03)
const RefreshCcw03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw03', props.className].join(' ')}
    />
  )
})
RefreshCcw03.displayName = 'IconRefreshCcw03'
export default RefreshCcw03
