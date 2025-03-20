import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining06 = (props, ref) => {
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
        d="M13 21H6m13-3h-9m-3 0H5m13 3h-2m-9-6a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004Q17.395 6 17.5 6a4.5 4.5 0 1 1 0 9z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining06)
const CloudRaining06 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudRaining06'].join(' ')}
    />
  )
})
CloudRaining06.displayName = 'IconCloudRaining06'
export default CloudRaining06
