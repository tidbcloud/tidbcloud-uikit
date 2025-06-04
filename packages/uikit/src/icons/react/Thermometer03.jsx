import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThermometer03 = (props, ref) => {
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
        d="M13.9999 2.00016L9.99992 2.00016M13.9999 4.66683L9.99992 4.66683M13.9999 7.3335L9.99992 7.3335M3.66659 9.17201V3.00016C3.66659 2.07969 4.41278 1.3335 5.33325 1.3335C6.25373 1.3335 6.99992 2.07969 6.99992 3.00016V9.17201C7.80391 9.71019 8.33325 10.6267 8.33325 11.6668C8.33325 13.3237 6.99011 14.6668 5.33325 14.6668C3.6764 14.6668 2.33325 13.3237 2.33325 11.6668C2.33325 10.6267 2.86259 9.71019 3.66659 9.17201ZM5.99992 11.6668C5.99992 12.035 5.70144 12.3335 5.33325 12.3335C4.96506 12.3335 4.66659 12.035 4.66659 11.6668C4.66659 11.2986 4.96506 11.0002 5.33325 11.0002C5.70144 11.0002 5.99992 11.2986 5.99992 11.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThermometer03)
const Thermometer03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Thermometer03', props.className].join(' ')}
    />
  )
})
Thermometer03.displayName = 'IconThermometer03'
export default Thermometer03
