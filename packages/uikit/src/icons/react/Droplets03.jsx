import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDroplets03 = (props, ref) => {
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
        d="M8.37333 4.05317C8.83184 3.32059 9.15687 2.51253 9.33333 1.6665C9.66667 3.33317 10.6667 4.93317 12 5.99984C13.3333 7.0665 14 8.33317 14 9.6665C14.0038 10.588 13.7339 11.4899 13.2245 12.2579C12.7151 13.0259 11.9892 13.6253 11.1388 13.9802C10.2883 14.3351 9.35161 14.4294 8.44745 14.2514C7.54328 14.0733 6.71236 13.6307 6.06 12.9798M4.66667 10.5198C6.13333 10.5198 7.33333 9.29984 7.33333 7.81984C7.33333 7.0465 6.95333 6.31317 6.19333 5.69317C5.43333 5.07317 4.86 4.15317 4.66667 3.1865C4.47333 4.15317 3.90667 5.07984 3.14 5.69317C2.37333 6.3065 2 7.05317 2 7.81984C2 9.29984 3.2 10.5198 4.66667 10.5198Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDroplets03)
const Droplets03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Droplets03', props.className].join(' ')}
    />
  )
})
Droplets03.displayName = 'IconDroplets03'
export default Droplets03
