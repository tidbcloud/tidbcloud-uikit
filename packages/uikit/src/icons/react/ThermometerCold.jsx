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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 8.00016H8.00016M6.00016 2.66683V13.3335M2.00016 6.00016L4.00016 8.00016L2.00016 10.0002M8.00016 4.00016L6.00016 6.00016L4.00016 4.00016M4.00016 12.0002L6.00016 10.0002L7.00016 11.0002M13.3335 9.69025V2.66683C13.3335 1.93045 12.7365 1.3335 12.0002 1.3335C11.2638 1.3335 10.6668 1.93045 10.6668 2.66683V9.69025C9.86976 10.1513 9.3335 11.0131 9.3335 12.0002C9.3335 13.4729 10.5274 14.6668 12.0002 14.6668C13.4729 14.6668 14.6668 13.4729 14.6668 12.0002C14.6668 11.0131 14.1306 10.1513 13.3335 9.69025Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
