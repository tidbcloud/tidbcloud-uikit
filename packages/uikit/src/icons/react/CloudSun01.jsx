import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun01 = (props, ref) => {
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
        strokeWidth={2}
        d="M19.368 12.405A5 5 0 1 0 12 8m0 0a5.5 5.5 0 0 0-4.9 3.001L7 11a5 5 0 0 0 0 10h10.5a4.5 4.5 0 1 0-.206-8.995A5.5 5.5 0 0 0 12 8"
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
      className={[props.className, 'tiui-icon', 'CloudSun01'].join(' ')}
    />
  )
})
CloudSun01.displayName = 'IconCloudSun01'
export default CloudSun01
