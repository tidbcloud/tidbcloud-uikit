import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageChatCircle = (props, ref) => {
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
        d="M4.06283 7.4859C4.02139 7.21886 3.99989 6.94528 3.99989 6.66671C3.99989 3.72119 6.40342 1.33337 9.36831 1.33337C12.3332 1.33337 14.7367 3.72119 14.7367 6.66671C14.7367 7.33209 14.6141 7.96901 14.39 8.55638C14.3435 8.67837 14.3202 8.73936 14.3097 8.78698C14.2992 8.83416 14.2951 8.86736 14.294 8.91568C14.2929 8.96444 14.2995 9.01816 14.3127 9.12559L14.5811 11.3057C14.6101 11.5417 14.6247 11.6597 14.5854 11.7455C14.551 11.8207 14.4899 11.8804 14.414 11.913C14.3273 11.9503 14.2097 11.9331 13.9744 11.8986L11.8509 11.5873C11.74 11.5711 11.6846 11.5629 11.6341 11.5632C11.5841 11.5635 11.5496 11.5672 11.5007 11.5775C11.4513 11.5879 11.3882 11.6115 11.2619 11.6588C10.673 11.8794 10.0349 12 9.36831 12C9.08952 12 8.81569 11.9789 8.54836 11.9382M5.08764 14.6667C7.06424 14.6667 8.66659 13.0251 8.66659 11C8.66659 8.975 7.06424 7.33337 5.08764 7.33337C3.11104 7.33337 1.50869 8.975 1.50869 11C1.50869 11.4071 1.57344 11.7987 1.69295 12.1645C1.74347 12.3192 1.76873 12.3965 1.77702 12.4493C1.78568 12.5045 1.7872 12.5355 1.78397 12.5912C1.78088 12.6446 1.76753 12.7049 1.74081 12.8256L1.33325 14.6667L3.32979 14.394C3.43876 14.3792 3.49325 14.3717 3.54083 14.372C3.59093 14.3724 3.61752 14.3751 3.66666 14.3849C3.71332 14.3942 3.78269 14.4187 3.92143 14.4676C4.28698 14.5967 4.67932 14.6667 5.08764 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'MessageChatCircle', props.className].join(' ')}
    />
  )
})
MessageChatCircle.displayName = 'IconMessageChatCircle'
export default MessageChatCircle
