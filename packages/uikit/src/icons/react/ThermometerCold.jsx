import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconThermometerCold = (props, ref) => {
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
        d="M1.33325 8.00016H7.99992M5.99992 2.66683V13.3335M1.99992 6.00016L3.99992 8.00016L1.99992 10.0002M7.99992 4.00016L5.99992 6.00016L3.99992 4.00016M3.99992 12.0002L5.99992 10.0002L6.99992 11.0002M13.3333 9.69025V2.66683C13.3333 1.93045 12.7363 1.3335 11.9999 1.3335C11.2635 1.3335 10.6666 1.93045 10.6666 2.66683V9.69025C9.86952 10.1513 9.33325 11.0131 9.33325 12.0002C9.33325 13.4729 10.5272 14.6668 11.9999 14.6668C13.4727 14.6668 14.6666 13.4729 14.6666 12.0002C14.6666 11.0131 14.1303 10.1513 13.3333 9.69025Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconThermometerCold)
const ThermometerCold = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ThermometerCold', props.className].join(' ')}
    />
  )
})
ThermometerCold.displayName = 'IconThermometerCold'
export default ThermometerCold
