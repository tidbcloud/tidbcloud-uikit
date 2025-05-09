import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDroplets01 = (props, ref) => {
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
        d="M14.6667 10.6668C14.6667 12.876 12.8758 14.6668 10.6667 14.6668C8.45757 14.6668 6.66671 12.876 6.66671 10.6668C6.66671 7.79102 10.6667 1.3335 10.6667 1.3335C10.6667 1.3335 14.6667 7.79102 14.6667 10.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M5.33337 6.00016C5.33337 7.10473 4.43794 8.00016 3.33337 8.00016C2.2288 8.00016 1.33337 7.10473 1.33337 6.00016C1.33337 4.56226 3.33337 1.3335 3.33337 1.3335C3.33337 1.3335 5.33337 4.56226 5.33337 6.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDroplets01)
const Droplets01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Droplets01', props.className].join(' ')}
    />
  )
})
Droplets01.displayName = 'IconDroplets01'
export default Droplets01
