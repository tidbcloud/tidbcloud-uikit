import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudLightning = (props, ref) => {
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
        d="M19 15.7439C20.7478 15.1262 22 13.4593 22 11.5C22 9.15643 20.2085 7.23129 17.9203 7.01937C17.4522 4.17213 14.9798 2 12 2C9.02024 2 6.54781 4.17213 6.07974 7.01937C3.79151 7.23129 2 9.15643 2 11.5C2 13.4593 3.25221 15.1262 5 15.7439M13 10L9 16H15L11 22"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudLightning)
const CloudLightning = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudLightning'].join(' ')}
    />
  )
})
CloudLightning.displayName = 'IconCloudLightning'
export default CloudLightning
