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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33334 1.3335L2.66668 2.66683M14.6667 1.3335L13.3333 2.66683M14.6667 14.6668L13.3333 13.3335M1.33334 14.6668L2.66668 13.3335M1.33334 10.6668H2.33334M5.33334 1.3335V2.3335M14.6667 5.3335H13.6667M10.6667 14.6668V13.6668M12 10.6668H14.3333M10.6667 1.3335V4.00016M1.33334 5.3335H4.00001M5.33334 14.6668V12.0002M10.6667 8.00016C10.6667 9.47292 9.47277 10.6668 8.00001 10.6668C6.52725 10.6668 5.33334 9.47292 5.33334 8.00016C5.33334 6.5274 6.52725 5.3335 8.00001 5.3335C9.47277 5.3335 10.6667 6.5274 10.6667 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
