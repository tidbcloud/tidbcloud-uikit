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
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3.334c0 1.104-2.686 2-6 2s-6-.896-6-2m12 0c0-1.105-2.686-2-6-2s-6 .895-6 2m12 0V7M2 3.334v9.333c0 1.107 2.667 2 6 2M8 10c-3.333 0-6-.893-6-2m8 5.267c0 .773.597 1.4 1.333 1.4h1.238c.79 0 1.429-.672 1.429-1.5 0-.829-.64-1.5-1.429-1.5H11.43c-.79 0-1.429-.672-1.429-1.5 0-.829.64-1.5 1.429-1.5h1.238c.736 0 1.333.627 1.333 1.4"
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
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
SystemDatabase.displayName = 'IconSystemDatabase'
export default SystemDatabase
