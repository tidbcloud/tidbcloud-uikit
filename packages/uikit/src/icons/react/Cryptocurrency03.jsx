import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency03 = (props, ref) => {
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
        d="M1.3335 1.3335L2.66683 2.66683M14.6668 1.3335L13.3335 2.66683M14.6668 14.6668L13.3335 13.3335M1.3335 14.6668L2.66683 13.3335M1.3335 10.6668H2.3335M5.3335 1.3335V2.3335M14.6668 5.3335H13.6668M10.6668 14.6668V13.6668M12.0002 10.6668H14.3335M10.6668 1.3335V4.00016M1.3335 5.3335H4.00016M5.3335 14.6668V12.0002M10.6668 8.00016C10.6668 9.47292 9.47292 10.6668 8.00016 10.6668C6.5274 10.6668 5.3335 9.47292 5.3335 8.00016C5.3335 6.5274 6.5274 5.3335 8.00016 5.3335C9.47292 5.3335 10.6668 6.5274 10.6668 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency03)
const Cryptocurrency03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cryptocurrency03', props.className].join(' ')}
    />
  )
})
Cryptocurrency03.displayName = 'IconCryptocurrency03'
export default Cryptocurrency03
