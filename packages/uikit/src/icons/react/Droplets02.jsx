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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00004 14.3332C9.23772 14.3332 10.4247 13.8415 11.2999 12.9663C12.175 12.0912 12.6667 10.9042 12.6667 9.6665C12.6667 8.33317 12 7.0665 10.6667 5.99984C9.33337 4.93317 8.33337 3.33317 8.00004 1.6665C7.66671 3.33317 6.66671 4.93317 5.33337 5.99984C4.00004 7.0665 3.33337 8.33317 3.33337 9.6665C3.33337 10.9042 3.82504 12.0912 4.70021 12.9663C5.57538 13.8415 6.76236 14.3332 8.00004 14.3332Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
