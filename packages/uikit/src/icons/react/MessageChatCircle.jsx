import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageChatCircle = (props, ref) => {
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
        d="M6.094 11.229A8 8 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8 0 .998-.184 1.954-.52 2.835-.07.182-.105.274-.12.345a1 1 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a1 1 0 0 0-.2.021c-.074.016-.169.051-.358.122a8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11s-5.369 2.462-5.369 5.5c0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.3 5.3 0 0 0 1.75.299"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageChatCircle)
const MessageChatCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MessageChatCircle'].join(' ')}
    />
  )
})
MessageChatCircle.displayName = 'IconMessageChatCircle'
export default MessageChatCircle
