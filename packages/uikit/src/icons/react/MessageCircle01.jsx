import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageCircle01 = (props, ref) => {
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
        d="M21 11.5a8.5 8.5 0 0 1-11.555 7.935c-.174-.067-.26-.1-.33-.116a1 1 0 0 0-.186-.025 2 2 0 0 0-.303.021l-5.12.53c-.49.05-.733.075-.877-.013a.5.5 0 0 1-.234-.35c-.026-.166.09-.382.324-.814l1.636-3.027c.134-.25.202-.374.232-.494a.9.9 0 0 0 .028-.326c-.01-.123-.064-.283-.172-.604A8.5 8.5 0 1 1 21 11.5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageCircle01)
const MessageCircle01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MessageCircle01'].join(' ')}
    />
  )
})
MessageCircle01.displayName = 'IconMessageCircle01'
export default MessageCircle01
