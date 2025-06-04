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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33325 4.66659L9.33325 11.3333L5.33325 14.6666V1.33325L9.33325 4.66659L1.33325 11.3333M13.4296 4.33325C14.172 5.36528 14.6093 6.63154 14.6093 7.99992C14.6093 9.3683 14.172 10.6346 13.4296 11.6666M11.3333 5.90474C11.7475 6.49866 11.9905 7.22095 11.9905 7.99998C11.9905 8.77902 11.7475 9.50131 11.3333 10.0952"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
