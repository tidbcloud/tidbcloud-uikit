import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserEdit = (props, ref) => {
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
        d="M9 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21M14.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M11 21l3.101-.886c.149-.043.223-.064.292-.096a1 1 0 0 0 .175-.102c.061-.045.116-.1.225-.21l6.457-6.456a1.768 1.768 0 1 0-2.5-2.5l-6.457 6.457c-.11.11-.164.164-.209.225a1 1 0 0 0-.102.175 2 2 0 0 0-.096.292z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserEdit)
const UserEdit = forwardRef((props, ref) => {
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
UserEdit.displayName = 'IconUserEdit'
export default UserEdit
