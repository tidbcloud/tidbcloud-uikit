import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconClockRefresh = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M20.4532 12.8928C20.1754 15.5027 18.6967 17.9484 16.2497 19.3612C12.1842 21.7084 6.98566 20.3155 4.63845 16.25L4.38845 15.817M3.54617 11.1071C3.82397 8.49723 5.30276 6.05151 7.74974 4.63874C11.8152 2.29153 17.0138 3.68447 19.361 7.74995L19.611 8.18297M3.49316 18.0659L4.22522 15.3339L6.95727 16.0659M17.0422 7.93398L19.7743 8.66603L20.5063 5.93398M11.9997 7.49995V12L14.4997 13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconClockRefresh)
const ClockRefresh = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ClockRefresh'].join(' ')}
    />
  )
})
ClockRefresh.displayName = 'IconClockRefresh'
export default ClockRefresh
