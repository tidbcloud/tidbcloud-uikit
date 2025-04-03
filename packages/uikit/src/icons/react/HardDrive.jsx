import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHardDrive = (props, ref) => {
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
        d="M1.66683 8.00008H14.3335M4.00016 10.6667H6.66683M5.97787 2.66675H10.0225C10.7404 2.66675 11.0993 2.66675 11.4162 2.77606C11.6965 2.87272 11.9517 3.03048 12.1635 3.23791C12.403 3.47248 12.5636 3.79355 12.8846 4.43566L14.329 7.32442C14.455 7.57641 14.518 7.7024 14.5624 7.83445C14.6019 7.95171 14.6304 8.07239 14.6475 8.19492C14.6668 8.3329 14.6668 8.47376 14.6668 8.7555V10.1334C14.6668 11.2535 14.6668 11.8136 14.4488 12.2414C14.2571 12.6177 13.9511 12.9237 13.5748 13.1154C13.147 13.3334 12.5869 13.3334 11.4668 13.3334H4.5335C3.41339 13.3334 2.85334 13.3334 2.42552 13.1154C2.04919 12.9237 1.74323 12.6177 1.55148 12.2414C1.3335 11.8136 1.3335 11.2535 1.3335 10.1334V8.7555C1.3335 8.47376 1.3335 8.3329 1.35281 8.19492C1.36997 8.07239 1.39845 7.95171 1.43791 7.83445C1.48234 7.7024 1.54533 7.5764 1.67133 7.32442L3.1157 4.43566C3.43677 3.79354 3.5973 3.47248 3.83679 3.23791C4.04858 3.03048 4.30384 2.87272 4.58409 2.77606C4.901 2.66675 5.25996 2.66675 5.97787 2.66675Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHardDrive)
const HardDrive = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'HardDrive', props.className].join(' ')}
    />
  )
})
HardDrive.displayName = 'IconHardDrive'
export default HardDrive
