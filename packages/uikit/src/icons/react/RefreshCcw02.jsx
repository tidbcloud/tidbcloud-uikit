import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M2 10C2 10 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C19.6092 6.88131 20.4133 8.40072 20.7762 10M2 10V4M2 10H8M22 14C22 14 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C4.39076 17.1187 3.58669 15.5993 3.22383 14M22 14V20M22 14H16"
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
