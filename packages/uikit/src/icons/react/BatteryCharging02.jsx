import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBatteryCharging02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.5 18 4-6h-6l4-6M22 13v-2m-8 7h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 15.72 19 14.88 19 13.2V10c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C16.396 6 15.93 6 15 6M7 6h-.2c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 8.28 2 9.12 2 10.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C4.605 18 5.07 18 6 18"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBatteryCharging02)
const BatteryCharging02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
BatteryCharging02.displayName = 'IconBatteryCharging02'
export default BatteryCharging02
