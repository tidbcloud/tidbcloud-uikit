import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBluetoothOff = (props, ref) => {
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
        d="m6 17 6-5v10l5.44-4.533M12 7V2l6 5-2.918 2.432M21 21 3 3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBluetoothOff)
const BluetoothOff = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BluetoothOff'].join(' ')}
    />
  )
})
BluetoothOff.displayName = 'IconBluetoothOff'
export default BluetoothOff
