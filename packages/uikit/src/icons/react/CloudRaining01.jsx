import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining01 = (props, ref) => {
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
        d="M20 15.242a4.5 4.5 0 0 0-2.08-8.223 6.002 6.002 0 0 0-11.84 0A4.5 4.5 0 0 0 4 15.242M8 18v2m0-8v2m8 4v2m0-8v2m-4 6v2m0-8v2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining01)
const CloudRaining01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudRaining01'].join(' ')}
    />
  )
})
CloudRaining01.displayName = 'IconCloudRaining01'
export default CloudRaining01
