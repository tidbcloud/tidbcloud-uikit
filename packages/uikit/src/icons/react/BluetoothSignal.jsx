import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBluetoothSignal = (props, ref) => {
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
        d="M1.3335 4.66659L9.3335 11.3333L5.3335 14.6666V1.33325L9.3335 4.66659L1.3335 11.3333M13.4299 4.33325C14.1723 5.36528 14.6095 6.63154 14.6095 7.99992C14.6095 9.3683 14.1723 10.6346 13.4299 11.6666M11.3335 5.90474C11.7478 6.49866 11.9907 7.22095 11.9907 7.99998C11.9907 8.77902 11.7478 9.50131 11.3335 10.0952"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'BluetoothSignal', props.className].join(' ')}
    />
  )
})
BluetoothSignal.displayName = 'IconBluetoothSignal'
export default BluetoothSignal
