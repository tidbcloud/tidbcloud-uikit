import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudMoon = (props, ref) => {
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
        d="M11 8.66669C12.7179 8.66669 14.1599 7.48533 14.5578 5.89069C14.2725 5.96191 13.974 5.99972 13.6667 5.99972C11.6417 5.99972 10 4.3581 10 2.33305C10 2.02588 10.0378 1.72752 10.109 1.44238C8.51454 1.84045 7.33337 3.2823 7.33337 5.00002C7.33337 5.6085 7.48159 6.18236 7.74389 6.68748M3.33337 4.66667V2M2.00004 3.33333H4.66671M4.00004 14.6667C2.52728 14.6667 1.33337 13.4728 1.33337 12C1.33337 10.6814 2.29038 9.58638 3.5477 9.37154C4.08588 7.79803 5.5775 6.66667 7.33337 6.66667C8.85884 6.66667 10.1849 7.5206 10.8595 8.77652C11.1163 8.70494 11.3871 8.66667 11.6667 8.66667C13.3236 8.66667 14.6667 10.0098 14.6667 11.6667C14.6667 13.3235 13.3236 14.6667 11.6667 14.6667C9.11115 14.6667 6.5556 14.6667 4.00004 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudMoon)
const CloudMoon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudMoon', props.className].join(' ')}
    />
  )
})
CloudMoon.displayName = 'IconCloudMoon'
export default CloudMoon
