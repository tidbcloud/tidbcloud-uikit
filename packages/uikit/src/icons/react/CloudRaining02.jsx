import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining02 = (props, ref) => {
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
        d="M16 12v8m-8-8v8m4-6v8m8-6.758a4.5 4.5 0 0 0-2.08-8.223 6.002 6.002 0 0 0-11.84 0A4.5 4.5 0 0 0 4 15.242"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining02)
const CloudRaining02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudRaining02'].join(' ')}
    />
  )
})
CloudRaining02.displayName = 'IconCloudRaining02'
export default CloudRaining02
