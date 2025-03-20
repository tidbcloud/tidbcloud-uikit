import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining05 = (props, ref) => {
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
        d="M16 18.5 15 21m-7-2.5L7 21m5-2.5L11 21m-4-6a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004Q17.395 6 17.5 6a4.5 4.5 0 1 1 0 9z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining05)
const CloudRaining05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudRaining05'].join(' ')}
    />
  )
})
CloudRaining05.displayName = 'IconCloudRaining05'
export default CloudRaining05
