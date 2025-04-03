import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemDatabase = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V10.5M3 5V19C3 20.66 7 22 12 22M12 15C7 15 3 13.66 3 12M15 19.9C15 21.0598 15.8954 22 17 22H18.8571C20.0406 22 21 20.9926 21 19.75C21 18.5074 20.0406 17.5 18.8571 17.5H17.1429C15.9594 17.5 15 16.4926 15 15.25C15 14.0074 15.9594 13 17.1429 13H19C20.1046 13 21 13.9402 21 15.1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemDatabase)
const SystemDatabase = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SystemDatabase', props.className].join(' ')}
    />
  )
})
SystemDatabase.displayName = 'IconSystemDatabase'
export default SystemDatabase
