import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemDatabase = (props, ref) => {
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
        d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v5.5M3 5v14c0 1.66 4 3 9 3m0-7c-5 0-9-1.34-9-3m12 7.9c0 1.16.895 2.1 2 2.1h1.857C20.041 22 21 20.993 21 19.75s-.96-2.25-2.143-2.25h-1.714C15.959 17.5 15 16.493 15 15.25S15.96 13 17.143 13H19c1.105 0 2 .94 2 2.1"
        strokeWidth="inherit"
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
      className={[props.className, 'tiui-icon', 'SystemDatabase'].join(' ')}
    />
  )
})
SystemDatabase.displayName = 'IconSystemDatabase'
export default SystemDatabase
