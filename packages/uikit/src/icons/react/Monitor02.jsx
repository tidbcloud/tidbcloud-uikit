import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMonitor02 = (props, ref) => {
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
        d="M5.04804 14C5.9379 13.5732 6.94014 13.3333 8.00016 13.3333C9.06018 13.3333 10.0624 13.5732 10.9523 14M4.5335 11.3333H11.4668C12.5869 11.3333 13.147 11.3333 13.5748 11.1153C13.9511 10.9236 14.2571 10.6176 14.4488 10.2413C14.6668 9.81349 14.6668 9.25344 14.6668 8.13333V5.2C14.6668 4.0799 14.6668 3.51984 14.4488 3.09202C14.2571 2.71569 13.9511 2.40973 13.5748 2.21799C13.147 2 12.5869 2 11.4668 2H4.5335C3.41339 2 2.85334 2 2.42552 2.21799C2.04919 2.40973 1.74323 2.71569 1.55148 3.09202C1.3335 3.51984 1.3335 4.0799 1.3335 5.2V8.13333C1.3335 9.25344 1.3335 9.81349 1.55148 10.2413C1.74323 10.6176 2.04919 10.9236 2.42552 11.1153C2.85334 11.3333 3.41339 11.3333 4.5335 11.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMonitor02)
const Monitor02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Monitor02', props.className].join(' ')}
    />
  )
})
Monitor02.displayName = 'IconMonitor02'
export default Monitor02
