import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSettings04 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2 5.33325L10 5.33325M10 5.33325C10 6.43782 10.8954 7.33325 12 7.33325C13.1046 7.33325 14 6.43782 14 5.33325C14 4.22868 13.1046 3.33325 12 3.33325C10.8954 3.33325 10 4.22868 10 5.33325ZM6 10.6666L14 10.6666M6 10.6666C6 11.7712 5.10457 12.6666 4 12.6666C2.89543 12.6666 2 11.7712 2 10.6666C2 9.56202 2.89543 8.66659 4 8.66659C5.10457 8.66659 6 9.56202 6 10.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSettings04)
const Settings04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Settings04', props.className].join(' ')}
    />
  )
})
Settings04.displayName = 'IconSettings04'
export default Settings04
