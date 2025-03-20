import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3.333c0 1.105-2.686 2-6 2s-6-.895-6-2m12 0c0-1.104-2.686-2-6-2s-6 .896-6 2m12 0v9.334c0 1.106-2.667 2-6 2s-6-.894-6-2V3.333M14 8c0 1.107-2.667 2-6 2s-6-.893-6-2"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase01)
const Database01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Database01'].join(' ')}
    />
  )
})
Database01.displayName = 'IconDatabase01'
export default Database01
