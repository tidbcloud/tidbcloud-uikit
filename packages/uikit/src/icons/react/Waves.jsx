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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33325 4.00016C1.73325 4.3335 2.13325 4.66683 2.99992 4.66683C4.66659 4.66683 4.66659 3.3335 6.33325 3.3335C7.19992 3.3335 7.59992 3.66683 7.99992 4.00016C8.39992 4.3335 8.79992 4.66683 9.66659 4.66683C11.3333 4.66683 11.3333 3.3335 12.9999 3.3335C13.8666 3.3335 14.2666 3.66683 14.6666 4.00016M1.33325 12.0002C1.73325 12.3335 2.13325 12.6668 2.99992 12.6668C4.66659 12.6668 4.66659 11.3335 6.33325 11.3335C7.19992 11.3335 7.59992 11.6668 7.99992 12.0002C8.39992 12.3335 8.79992 12.6668 9.66659 12.6668C11.3333 12.6668 11.3333 11.3335 12.9999 11.3335C13.8666 11.3335 14.2666 11.6668 14.6666 12.0002M1.33325 8.00016C1.73325 8.3335 2.13325 8.66683 2.99992 8.66683C4.66659 8.66683 4.66659 7.3335 6.33325 7.3335C7.19992 7.3335 7.59992 7.66683 7.99992 8.00016C8.39992 8.3335 8.79992 8.66683 9.66659 8.66683C11.3333 8.66683 11.3333 7.3335 12.9999 7.3335C13.8666 7.3335 14.2666 7.66683 14.6666 8.00016"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
