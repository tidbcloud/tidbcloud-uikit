import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDroplets02 = (props, ref) => {
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
        d="M8.00016 14.3332C9.23784 14.3332 10.4248 13.8415 11.3 12.9663C12.1752 12.0912 12.6668 10.9042 12.6668 9.6665C12.6668 8.33317 12.0002 7.0665 10.6668 5.99984C9.3335 4.93317 8.3335 3.33317 8.00016 1.6665C7.66683 3.33317 6.66683 4.93317 5.3335 5.99984C4.00016 7.0665 3.3335 8.33317 3.3335 9.6665C3.3335 10.9042 3.82516 12.0912 4.70033 12.9663C5.5755 13.8415 6.76249 14.3332 8.00016 14.3332Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDroplets02)
const Droplets02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Droplets02', props.className].join(' ')}
    />
  )
})
Droplets02.displayName = 'IconDroplets02'
export default Droplets02
