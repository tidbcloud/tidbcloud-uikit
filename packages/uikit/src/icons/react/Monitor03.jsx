import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMonitor03 = (props, ref) => {
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
        d="M1.3335 9.33333L14.6668 9.33333M5.3335 14H10.6668M4.5335 12H11.4668C12.5869 12 13.147 12 13.5748 11.782C13.9511 11.5903 14.2571 11.2843 14.4488 10.908C14.6668 10.4802 14.6668 9.92011 14.6668 8.8V5.2C14.6668 4.0799 14.6668 3.51984 14.4488 3.09202C14.2571 2.71569 13.9511 2.40973 13.5748 2.21799C13.147 2 12.5869 2 11.4668 2H4.5335C3.41339 2 2.85334 2 2.42552 2.21799C2.04919 2.40973 1.74323 2.71569 1.55148 3.09202C1.3335 3.51984 1.3335 4.07989 1.3335 5.2V8.8C1.3335 9.92011 1.3335 10.4802 1.55148 10.908C1.74323 11.2843 2.04919 11.5903 2.42552 11.782C2.85334 12 3.41339 12 4.5335 12Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMonitor03)
const Monitor03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Monitor03', props.className].join(' ')}
    />
  )
})
Monitor03.displayName = 'IconMonitor03'
export default Monitor03
