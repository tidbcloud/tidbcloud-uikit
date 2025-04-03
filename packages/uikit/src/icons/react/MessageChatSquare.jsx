import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageChatSquare = (props, ref) => {
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
        d="M6.66683 10L4.61666 12.0758C4.33069 12.3654 4.1877 12.5102 4.0648 12.5204C3.95817 12.5292 3.85377 12.4864 3.78414 12.4051C3.70387 12.3115 3.70387 12.108 3.70387 11.7011V10.6611C3.70387 10.296 3.40488 10.0318 3.04363 9.97892V9.97892C2.16932 9.85086 1.48268 9.16421 1.35461 8.28991C1.3335 8.14574 1.3335 7.97372 1.3335 7.62967V4.53337C1.3335 3.41327 1.3335 2.85322 1.55148 2.42539C1.74323 2.04907 2.04919 1.74311 2.42552 1.55136C2.85334 1.33337 3.41339 1.33337 4.5335 1.33337H9.46683C10.5869 1.33337 11.147 1.33337 11.5748 1.55136C11.9511 1.74311 12.2571 2.04907 12.4488 2.42539C12.6668 2.85322 12.6668 3.41327 12.6668 4.53337V7.33337M12.6668 14.6667L11.2159 13.658C11.0119 13.5162 10.91 13.4453 10.799 13.395C10.7005 13.3504 10.5969 13.3179 10.4905 13.2983C10.3707 13.2762 10.2465 13.2762 9.99811 13.2762H8.80016C8.05343 13.2762 7.68006 13.2762 7.39484 13.1309C7.14396 13.0031 6.93999 12.7991 6.81215 12.5482C6.66683 12.263 6.66683 11.8896 6.66683 11.1429V9.46671C6.66683 8.71997 6.66683 8.3466 6.81215 8.06139C6.93999 7.8105 7.14396 7.60653 7.39484 7.4787C7.68006 7.33337 8.05343 7.33337 8.80016 7.33337H12.5335C13.2802 7.33337 13.6536 7.33337 13.9388 7.4787C14.1897 7.60653 14.3937 7.8105 14.5215 8.06139C14.6668 8.3466 14.6668 8.71997 14.6668 9.46671V11.2762C14.6668 11.8975 14.6668 12.2081 14.5653 12.4531C14.43 12.7798 14.1704 13.0394 13.8437 13.1747C13.5987 13.2762 13.2881 13.2762 12.6668 13.2762V14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageChatSquare)
const MessageChatSquare = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MessageChatSquare', props.className].join(' ')}
    />
  )
})
MessageChatSquare.displayName = 'IconMessageChatSquare'
export default MessageChatSquare
