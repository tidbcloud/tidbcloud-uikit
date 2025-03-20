import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageHeartCircle = (props, ref) => {
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
        d="M21 11.5a8.5 8.5 0 0 1-11.555 7.935c-.174-.067-.26-.1-.33-.116a1 1 0 0 0-.186-.025 2 2 0 0 0-.303.021l-5.12.53c-.49.05-.733.075-.877-.013a.5.5 0 0 1-.234-.35c-.026-.166.09-.382.324-.814l1.636-3.027c.134-.25.202-.374.232-.494a.9.9 0 0 0 .028-.326c-.01-.123-.064-.283-.172-.604A8.5 8.5 0 1 1 21 11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.497 8.95c-.9-1.04-2.4-1.319-3.528-.368-1.127.951-1.286 2.542-.4 3.667.548.697 1.924 1.97 2.893 2.838.355.319.533.478.746.542.183.055.394.055.577 0 .213-.064.39-.223.746-.542.969-.868 2.345-2.14 2.894-2.838a2.606 2.606 0 0 0-.401-3.667c-1.147-.941-2.628-.672-3.528.367"
        clipRule="evenodd"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageHeartCircle)
const MessageHeartCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MessageHeartCircle'].join(' ')}
    />
  )
})
MessageHeartCircle.displayName = 'IconMessageHeartCircle'
export default MessageHeartCircle
