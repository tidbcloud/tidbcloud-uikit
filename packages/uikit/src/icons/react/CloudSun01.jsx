import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun01 = (props, ref) => {
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
        d="M12.912 8.26988C13.9567 7.70709 14.6667 6.60313 14.6667 5.33333C14.6667 3.49238 13.1743 2 11.3334 2C9.49243 2 8.00004 3.49238 8.00004 5.33333M8.00004 5.33333C6.57489 5.33333 5.33964 6.1464 4.73285 7.33398C4.71085 7.33355 4.68881 7.33333 4.66671 7.33333C2.82576 7.33333 1.33337 8.82572 1.33337 10.6667C1.33337 12.5076 2.82576 14 4.66671 14C7.49018 14 9.16232 14 11.6667 14C13.3236 14 14.6667 12.6569 14.6667 11C14.6667 9.34315 13.3236 8 11.6667 8C11.6207 8 11.575 8.00104 11.5296 8.00308C11.0953 6.4625 9.67953 5.33333 8.00004 5.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSun01)
const CloudSun01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudSun01', props.className].join(' ')}
    />
  )
})
CloudSun01.displayName = 'IconCloudSun01'
export default CloudSun01
