import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfo1 = (props, ref) => {
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
        d="M5.33301 7.33337H8.2048V12.6667L10.6663 11.0257M8.66634 4.00004C8.66634 4.36823 8.36786 4.66671 7.99967 4.66671C7.63148 4.66671 7.33301 4.36823 7.33301 4.00004C7.33301 3.63185 7.63148 3.33337 7.99967 3.33337C8.36786 3.33337 8.66634 3.63185 8.66634 4.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfo1)
const Info1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Info1', props.className].join(' ')}
    />
  )
})
Info1.displayName = 'IconInfo1'
export default Info1
