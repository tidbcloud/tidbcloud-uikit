import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChart00 = (props, ref) => {
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
        d="M14.6666 4.66669L9.42083 9.91244C9.15682 10.1765 9.02482 10.3085 8.8726 10.3579C8.7387 10.4014 8.59447 10.4014 8.46057 10.3579C8.30836 10.3085 8.17635 10.1765 7.91234 9.91244L6.0875 8.0876C5.82349 7.82359 5.69148 7.69158 5.53926 7.64212C5.40537 7.59862 5.26114 7.59862 5.12724 7.64212C4.97502 7.69158 4.84302 7.82359 4.579 8.0876L1.33325 11.3334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChart00)
const LineChart00 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChart00', props.className].join(' ')}
    />
  )
})
LineChart00.displayName = 'IconLineChart00'
export default LineChart00
