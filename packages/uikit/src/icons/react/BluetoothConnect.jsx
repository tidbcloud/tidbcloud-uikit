import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBluetoothConnect = (props, ref) => {
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
        d="M2 4.66659L10 11.3333L6 14.6666V1.33325L10 4.66659L2 11.3333M12 7.99992H12.0067M10 7.99992H10.0067M14 7.99992H14.0067"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'BluetoothConnect', props.className].join(' ')}
    />
  )
})
BluetoothConnect.displayName = 'IconBluetoothConnect'
export default BluetoothConnect
