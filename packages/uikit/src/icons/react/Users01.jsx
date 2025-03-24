import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsers01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsers01)
const Users01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Users01', props.className].join(' ')}
    />
  )
})
Users01.displayName = 'IconUsers01'
export default Users01
