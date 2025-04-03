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
      ref={ref}
      {...props}
    >
      <path
        d="M4.3335 12.6667C2.67664 12.6667 1.3335 11.3236 1.3335 9.66671C1.3335 8.10433 2.52783 6.8209 4.05332 6.67962C4.36537 4.78146 6.01366 3.33337 8.00016 3.33337C9.98667 3.33337 11.635 4.78146 11.947 6.67962C13.4725 6.8209 14.6668 8.10433 14.6668 9.66671C14.6668 11.3236 13.3237 12.6667 11.6668 12.6667C8.74027 12.6667 6.8957 12.6667 4.3335 12.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
