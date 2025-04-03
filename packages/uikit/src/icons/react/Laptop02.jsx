import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLaptop02 = (props, ref) => {
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
        d="M14.0002 10.6667V4.80008C14.0002 4.05334 14.0002 3.67998 13.8548 3.39476C13.727 3.14388 13.523 2.9399 13.2722 2.81207C12.9869 2.66675 12.6136 2.66675 11.8668 2.66675H4.1335C3.38676 2.66675 3.01339 2.66675 2.72818 2.81207C2.47729 2.9399 2.27332 3.14388 2.14549 3.39476C2.00016 3.67998 2.00016 4.05334 2.00016 4.80008V10.6667M3.11127 13.3334H12.8891C13.3024 13.3334 13.509 13.3334 13.6786 13.288C14.1387 13.1647 14.4981 12.8053 14.6214 12.3452C14.6668 12.1756 14.6668 11.969 14.6668 11.5556C14.6668 11.349 14.6668 11.2456 14.6441 11.1609C14.5825 10.9308 14.4028 10.7511 14.1727 10.6895C14.0879 10.6667 13.9846 10.6667 13.7779 10.6667H2.22238C2.01572 10.6667 1.91239 10.6667 1.82762 10.6895C1.59756 10.7511 1.41786 10.9308 1.35621 11.1609C1.3335 11.2456 1.3335 11.349 1.3335 11.5556C1.3335 11.969 1.3335 12.1756 1.37893 12.3452C1.50222 12.8053 1.86161 13.1647 2.32174 13.288C2.49129 13.3334 2.69795 13.3334 3.11127 13.3334Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLaptop02)
const Laptop02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Laptop02', props.className].join(' ')}
    />
  )
})
Laptop02.displayName = 'IconLaptop02'
export default Laptop02
