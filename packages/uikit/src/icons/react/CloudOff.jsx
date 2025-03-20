import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudOff = (props, ref) => {
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
        d="M21.7 16.118a4.5 4.5 0 0 0-3.78-6.099 6 6 0 0 0-7.22-4.878M7.287 7.286a6 6 0 0 0-1.207 2.733A4.5 4.5 0 0 0 6.5 19h11c.456 0 .896-.068 1.311-.194M3 3l18 18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudOff)
const CloudOff = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudOff'].join(' ')}
    />
  )
})
CloudOff.displayName = 'IconCloudOff'
export default CloudOff
