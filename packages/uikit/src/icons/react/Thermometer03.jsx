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
      ref={ref}
      {...props}
    >
      <path
        d="M14.0002 2.00016L10.0002 2.00016M14.0002 4.66683L10.0002 4.66683M14.0002 7.3335L10.0002 7.3335M3.66683 9.17201V3.00016C3.66683 2.07969 4.41302 1.3335 5.3335 1.3335C6.25397 1.3335 7.00016 2.07969 7.00016 3.00016V9.17201C7.80415 9.71019 8.3335 10.6267 8.3335 11.6668C8.3335 13.3237 6.99035 14.6668 5.3335 14.6668C3.67664 14.6668 2.3335 13.3237 2.3335 11.6668C2.3335 10.6267 2.86284 9.71019 3.66683 9.17201ZM6.00016 11.6668C6.00016 12.035 5.70169 12.3335 5.3335 12.3335C4.96531 12.3335 4.66683 12.035 4.66683 11.6668C4.66683 11.2986 4.96531 11.0002 5.3335 11.0002C5.70169 11.0002 6.00016 11.2986 6.00016 11.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
