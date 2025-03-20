import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBluetoothConnect = (props, ref) => {
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
        d="m3 7 12 10-6 5V2l6 5L3 17m15-5h.01M15 12h.01M21 12h.01"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBluetoothConnect)
const BluetoothConnect = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BluetoothConnect'].join(' ')}
    />
  )
})
BluetoothConnect.displayName = 'IconBluetoothConnect'
export default BluetoothConnect
