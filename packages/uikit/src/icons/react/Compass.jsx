import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCompass = (props, ref) => {
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
        d="M8 2.66683C7.07953 2.66683 6.33333 3.41302 6.33333 4.3335C6.33333 5.25397 7.07953 6.00016 8 6.00016C8.92047 6.00016 9.66667 5.25397 9.66667 4.3335C9.66667 3.41302 8.92047 2.66683 8 2.66683ZM8 2.66683V1.3335M14 9.95848C12.5341 11.6193 10.3894 12.6668 8 12.6668C5.61061 12.6668 3.46589 11.6193 2 9.95848M7.16322 5.77462L2 14.6668M8.83678 5.77462L14 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCompass)
const Compass = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Compass', props.className].join(' ')}
    />
  )
})
Compass.displayName = 'IconCompass'
export default Compass
