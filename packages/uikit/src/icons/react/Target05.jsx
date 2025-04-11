import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTarget05 = (props, ref) => {
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
        d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 12C10.2093 12 12.0002 10.2092 12.0002 8.00004C12.0002 5.7909 10.2093 4.00004 8.00016 4.00004C5.79102 4.00004 4.00016 5.7909 4.00016 8.00004C4.00016 10.2092 5.79102 12 8.00016 12Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 9.33337C8.73654 9.33337 9.3335 8.73642 9.3335 8.00004C9.3335 7.26366 8.73654 6.66671 8.00016 6.66671C7.26378 6.66671 6.66683 7.26366 6.66683 8.00004C6.66683 8.73642 7.26378 9.33337 8.00016 9.33337Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTarget05)
const Target05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Target05', props.className].join(' ')}
    />
  )
})
Target05.displayName = 'IconTarget05'
export default Target05
