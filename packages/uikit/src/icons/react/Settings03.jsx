import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSettings03 = (props, ref) => {
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
        d="M15.05 9H5.5a2.5 2.5 0 0 1 0-5h9.55m-6.1 16h9.55a2.5 2.5 0 0 0 0-5H8.95M3 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m18-11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSettings03)
const Settings03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Settings03'].join(' ')}
    />
  )
})
Settings03.displayName = 'IconSettings03'
export default Settings03
