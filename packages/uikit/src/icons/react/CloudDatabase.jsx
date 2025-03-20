import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudDatabase = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 5.55C17 6.95833 13.6421 8.1 9.5 8.1 5.35786 8.1 2 6.95833 2 5.55M17 5.55C17 4.14167 13.6421 3 9.5 3 5.35786 3 2 4.14167 2 5.55M17 5.55V10.225M2 5.55V17.45C2 18.861 5.33333 20 9.5 20M9.5 14.05C5.33333 14.05 2 12.911 2 11.5M13.475 20C12.1081 20 11 18.8487 11 17.4286 11 16.0894 11.9853 14.9893 13.2439 14.8682 13.5013 13.2412 14.8611 12 16.5 12 18.1389 12 19.4987 13.2412 19.7561 14.8682 21.0147 14.9893 22 16.0894 22 17.4286 22 18.8487 20.8919 20 19.525 20 17.1106 20 15.5888 20 13.475 20Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudDatabase)
const CloudDatabase = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudDatabase'].join(' ')}
    />
  )
})
CloudDatabase.displayName = 'IconCloudDatabase'
export default CloudDatabase
