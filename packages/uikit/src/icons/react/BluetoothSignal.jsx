import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBluetoothSignal = (props, ref) => {
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
        d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.4 9.4 0 0 1 1.769 5.5 9.4 9.4 0 0 1-1.77 5.5M17 8.857c.621.891.986 1.975.986 3.143A5.48 5.48 0 0 1 17 15.143"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBluetoothSignal)
const BluetoothSignal = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BluetoothSignal'].join(' ')}
    />
  )
})
BluetoothSignal.displayName = 'IconBluetoothSignal'
export default BluetoothSignal
