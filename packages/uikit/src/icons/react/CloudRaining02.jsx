import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining02 = (props, ref) => {
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
        d="M16 12V20M8 12V20M12 14V22M20 15.2422C21.206 14.435 22 13.0602 22 11.5C22 9.15643 20.2085 7.23129 17.9203 7.01937C17.4522 4.17213 14.9798 2 12 2C9.02024 2 6.54781 4.17213 6.07974 7.01937C3.79151 7.23129 2 9.15643 2 11.5C2 13.0602 2.79401 14.435 4 15.2422"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
