import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBatteryFull = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 10v4m4-4v4m4-4v4m7.5-1v-2M6.8 18h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 15.72 19 14.88 19 13.2v-2.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 6 15.88 6 14.2 6H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 8.28 2 9.12 2 10.8v2.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 18 5.12 18 6.8 18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBatteryFull)
const BatteryFull = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BatteryFull'].join(' ')}
    />
  )
})
BatteryFull.displayName = 'IconBatteryFull'
export default BatteryFull
