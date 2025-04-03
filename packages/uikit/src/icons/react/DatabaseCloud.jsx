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
      ref={ref}
      {...props}
    >
      <path
        d="M11.333 3.7C11.333 4.63888 9.09443 5.4 6.33301 5.4C3.57158 5.4 1.33301 4.63888 1.33301 3.7M11.333 3.7C11.333 2.76112 9.09443 2 6.33301 2C3.57158 2 1.33301 2.76112 1.33301 3.7M11.333 3.7V6.81667M1.33301 3.7V11.6333C1.33301 12.574 3.55523 13.3333 6.33301 13.3333M6.33301 9.36667C3.55523 9.36667 1.33301 8.60733 1.33301 7.66667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.98301 13.3333C8.07174 13.3333 7.33301 12.5658 7.33301 11.619C7.33301 10.7263 7.98989 9.99287 8.82891 9.91214C9.00054 8.82748 9.9071 8 10.9997 8C12.0923 8 12.9988 8.82748 13.1704 9.91214C14.0095 9.99287 14.6663 10.7263 14.6663 11.619C14.6663 12.5658 13.9276 13.3333 13.0163 13.3333C11.4067 13.3333 10.3922 13.3333 8.98301 13.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
