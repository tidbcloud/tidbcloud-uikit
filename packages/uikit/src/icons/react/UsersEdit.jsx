import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsersEdit = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M15.5 3.29A4 4 0 0 1 18 7m-6 14.5 2.025-.405c.176-.035.265-.053.347-.085a1 1 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21.5 14a1.414 1.414 0 1 0-2-2l-6.658 6.657c-.127.128-.19.191-.241.264a1 1 0 0 0-.11.207c-.033.082-.05.17-.086.347zM13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsersEdit)
const UsersEdit = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'UsersEdit'].join(' ')}
    />
  )
})
UsersEdit.displayName = 'IconUsersEdit'
export default UsersEdit
