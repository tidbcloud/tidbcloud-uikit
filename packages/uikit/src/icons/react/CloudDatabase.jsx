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
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 5.55c0 1.408-3.358 2.55-7.5 2.55S2 6.958 2 5.55m15 0C17 4.142 13.642 3 9.5 3S2 4.142 2 5.55m15 0v4.675M2 5.55v11.9C2 18.861 5.333 20 9.5 20m0-5.95c-4.167 0-7.5-1.139-7.5-2.55M13.475 20C12.108 20 11 18.849 11 17.429c0-1.34.985-2.44 2.244-2.56C13.5 13.24 14.86 12 16.5 12s2.999 1.241 3.256 2.868C21.015 14.99 22 16.09 22 17.428 22 18.849 20.892 20 19.525 20z"
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
