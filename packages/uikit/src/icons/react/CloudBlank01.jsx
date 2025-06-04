import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudBlank01 = (props, ref) => {
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
        d="M4.33334 12.6667C2.67648 12.6667 1.33334 11.3236 1.33334 9.66671C1.33334 8.10433 2.52767 6.8209 4.05316 6.67962C4.36521 4.78146 6.0135 3.33337 8 3.33337C9.98651 3.33337 11.6348 4.78146 11.9468 6.67962C13.4723 6.8209 14.6667 8.10433 14.6667 9.66671C14.6667 11.3236 13.3235 12.6667 11.6667 12.6667C8.74011 12.6667 6.89554 12.6667 4.33334 12.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudBlank01)
const CloudBlank01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudBlank01', props.className].join(' ')}
    />
  )
})
CloudBlank01.displayName = 'IconCloudBlank01'
export default CloudBlank01
