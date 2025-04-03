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
      ref={ref}
      {...props}
    >
      <path
        d="M5.3335 8L8.00016 10.6667M8.00016 10.6667L10.6668 8M8.00016 10.6667V4.53333C8.00016 3.6062 8.00016 3.14263 7.63315 2.6236C7.3893 2.27874 6.68722 1.85312 6.26868 1.79641C5.63876 1.71107 5.39954 1.83585 4.92112 2.08543C2.78905 3.19762 1.3335 5.42883 1.3335 8C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8C14.6668 5.53239 13.3262 3.37791 11.3335 2.22522"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
