import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabaseCloud = (props, ref) => {
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
        d="M11.3333 3.7C11.3333 4.63888 9.09468 5.4 6.33325 5.4C3.57183 5.4 1.33325 4.63888 1.33325 3.7M11.3333 3.7C11.3333 2.76112 9.09468 2 6.33325 2C3.57183 2 1.33325 2.76112 1.33325 3.7M11.3333 3.7V6.81667M1.33325 3.7V11.6333C1.33325 12.574 3.55547 13.3333 6.33325 13.3333M6.33325 9.36667C3.55547 9.36667 1.33325 8.60733 1.33325 7.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.98325 13.3333C8.07198 13.3333 7.33325 12.5658 7.33325 11.619C7.33325 10.7263 7.99014 9.99287 8.82916 9.91214C9.00078 8.82748 9.90734 8 10.9999 8C12.0925 8 12.9991 8.82748 13.1707 9.91214C14.0097 9.99287 14.6666 10.7263 14.6666 11.619C14.6666 12.5658 13.9279 13.3333 13.0166 13.3333C11.407 13.3333 10.3925 13.3333 8.98325 13.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabaseCloud)
const DatabaseCloud = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DatabaseCloud', props.className].join(' ')}
    />
  )
})
DatabaseCloud.displayName = 'IconDatabaseCloud'
export default DatabaseCloud
