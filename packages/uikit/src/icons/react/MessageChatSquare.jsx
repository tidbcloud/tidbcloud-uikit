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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.66659 10L4.61641 12.0758C4.33044 12.3654 4.18746 12.5102 4.06455 12.5204C3.95793 12.5292 3.85353 12.4864 3.78389 12.4051C3.70362 12.3115 3.70362 12.108 3.70362 11.7011V10.6611C3.70362 10.296 3.40463 10.0318 3.04339 9.97892V9.97892C2.16908 9.85086 1.48244 9.16421 1.35437 8.28991C1.33325 8.14574 1.33325 7.97372 1.33325 7.62967V4.53337C1.33325 3.41327 1.33325 2.85322 1.55124 2.42539C1.74299 2.04907 2.04895 1.74311 2.42527 1.55136C2.85309 1.33337 3.41315 1.33337 4.53325 1.33337H9.46659C10.5867 1.33337 11.1467 1.33337 11.5746 1.55136C11.9509 1.74311 12.2569 2.04907 12.4486 2.42539C12.6666 2.85322 12.6666 3.41327 12.6666 4.53337V7.33337M12.6666 14.6667L11.2156 13.658C11.0117 13.5162 10.9097 13.4453 10.7987 13.395C10.7002 13.3504 10.5966 13.3179 10.4903 13.2983C10.3705 13.2762 10.2463 13.2762 9.99787 13.2762H8.79992C8.05318 13.2762 7.67981 13.2762 7.3946 13.1309C7.14372 13.0031 6.93974 12.7991 6.81191 12.5482C6.66659 12.263 6.66659 11.8896 6.66659 11.1429V9.46671C6.66659 8.71997 6.66659 8.3466 6.81191 8.06139C6.93974 7.8105 7.14372 7.60653 7.3946 7.4787C7.67981 7.33337 8.05318 7.33337 8.79992 7.33337H12.5333C13.28 7.33337 13.6534 7.33337 13.9386 7.4787C14.1895 7.60653 14.3934 7.8105 14.5213 8.06139C14.6666 8.3466 14.6666 8.71997 14.6666 9.46671V11.2762C14.6666 11.8975 14.6666 12.2081 14.5651 12.4531C14.4298 12.7798 14.1702 13.0394 13.8435 13.1747C13.5985 13.2762 13.2878 13.2762 12.6666 13.2762V14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
