import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDownload04 = (props, ref) => {
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
        d="M5.33334 8L8.00001 10.6667M8.00001 10.6667L10.6667 8M8.00001 10.6667V4.53333C8.00001 3.6062 8.00001 3.14263 7.633 2.6236C7.38915 2.27874 6.68706 1.85312 6.26853 1.79641C5.6386 1.71107 5.39939 1.83585 4.92096 2.08543C2.7889 3.19762 1.33334 5.42883 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 5.53239 13.326 3.37791 11.3333 2.22522"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDownload04)
const Download04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Download04', props.className].join(' ')}
    />
  )
})
Download04.displayName = 'IconDownload04'
export default Download04
