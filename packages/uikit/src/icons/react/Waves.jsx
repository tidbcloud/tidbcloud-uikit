import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWaves = (props, ref) => {
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
        d="M1.3335 4.00016C1.7335 4.3335 2.1335 4.66683 3.00016 4.66683C4.66683 4.66683 4.66683 3.3335 6.3335 3.3335C7.20016 3.3335 7.60016 3.66683 8.00016 4.00016C8.40016 4.3335 8.80016 4.66683 9.66683 4.66683C11.3335 4.66683 11.3335 3.3335 13.0002 3.3335C13.8668 3.3335 14.2668 3.66683 14.6668 4.00016M1.3335 12.0002C1.7335 12.3335 2.1335 12.6668 3.00016 12.6668C4.66683 12.6668 4.66683 11.3335 6.3335 11.3335C7.20016 11.3335 7.60016 11.6668 8.00016 12.0002C8.40016 12.3335 8.80016 12.6668 9.66683 12.6668C11.3335 12.6668 11.3335 11.3335 13.0002 11.3335C13.8668 11.3335 14.2668 11.6668 14.6668 12.0002M1.3335 8.00016C1.7335 8.3335 2.1335 8.66683 3.00016 8.66683C4.66683 8.66683 4.66683 7.3335 6.3335 7.3335C7.20016 7.3335 7.60016 7.66683 8.00016 8.00016C8.40016 8.3335 8.80016 8.66683 9.66683 8.66683C11.3335 8.66683 11.3335 7.3335 13.0002 7.3335C13.8668 7.3335 14.2668 7.66683 14.6668 8.00016"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWaves)
const Waves = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Waves', props.className].join(' ')}
    />
  )
})
Waves.displayName = 'IconWaves'
export default Waves
