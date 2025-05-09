import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserRight02 = (props, ref) => {
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
        d="M12.6667 6L14.6667 4M14.6667 4L12.6667 2M14.6667 4L10.6667 4M10.6667 14V13.2C10.6667 12.0799 10.6667 11.5198 10.4487 11.092C10.257 10.7157 9.95101 10.4097 9.57469 10.218C9.14687 10 8.58681 10 7.46671 10H4.53337C3.41327 10 2.85322 10 2.42539 10.218C2.04907 10.4097 1.74311 10.7157 1.55136 11.092C1.33337 11.5198 1.33337 12.0799 1.33337 13.2V14M8.33337 5C8.33337 6.28866 7.28871 7.33333 6.00004 7.33333C4.71138 7.33333 3.66671 6.28866 3.66671 5C3.66671 3.71134 4.71138 2.66667 6.00004 2.66667C7.28871 2.66667 8.33337 3.71134 8.33337 5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserRight02)
const UserRight02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserRight02', props.className].join(' ')}
    />
  )
})
UserRight02.displayName = 'IconUserRight02'
export default UserRight02
