import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMonitor04 = (props, ref) => {
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
        d="M10.0002 11.3333V14H6.00016V11.3333M3.46683 11.3333H12.5335C13.2802 11.3333 13.6536 11.3333 13.9388 11.188C14.1897 11.0602 14.3937 10.8562 14.5215 10.6053C14.6668 10.3201 14.6668 9.94674 14.6668 9.2V4.13333C14.6668 3.3866 14.6668 3.01323 14.5215 2.72801C14.3937 2.47713 14.1897 2.27316 13.9388 2.14532C13.6536 2 13.2802 2 12.5335 2H3.46683C2.72009 2 2.34672 2 2.06151 2.14532C1.81063 2.27316 1.60665 2.47713 1.47882 2.72801C1.3335 3.01323 1.3335 3.3866 1.3335 4.13333V9.2C1.3335 9.94674 1.3335 10.3201 1.47882 10.6053C1.60665 10.8562 1.81063 11.0602 2.06151 11.188C2.34672 11.3333 2.72009 11.3333 3.46683 11.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMonitor04)
const Monitor04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Monitor04', props.className].join(' ')}
    />
  )
})
Monitor04.displayName = 'IconMonitor04'
export default Monitor04
