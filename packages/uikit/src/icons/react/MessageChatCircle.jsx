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
      ref={ref}
      {...props}
    >
      <path
        d="M4.06307 7.4859C4.02164 7.21886 4.00014 6.94528 4.00014 6.66671C4.00014 3.72119 6.40366 1.33337 9.36856 1.33337C12.3335 1.33337 14.737 3.72119 14.737 6.66671C14.737 7.33209 14.6143 7.96901 14.3903 8.55638C14.3437 8.67837 14.3205 8.73936 14.3099 8.78698C14.2994 8.83416 14.2954 8.86736 14.2943 8.91568C14.2931 8.96444 14.2997 9.01816 14.3129 9.12559L14.5813 11.3057C14.6104 11.5417 14.6249 11.6597 14.5857 11.7455C14.5513 11.8207 14.4902 11.8804 14.4142 11.913C14.3276 11.9503 14.2099 11.9331 13.9746 11.8986L11.8511 11.5873C11.7403 11.5711 11.6848 11.5629 11.6343 11.5632C11.5844 11.5635 11.5498 11.5672 11.5009 11.5775C11.4515 11.5879 11.3884 11.6115 11.2622 11.6588C10.6733 11.8794 10.0351 12 9.36856 12C9.08977 12 8.81594 11.9789 8.5486 11.9382M5.08788 14.6667C7.06448 14.6667 8.66683 13.0251 8.66683 11C8.66683 8.975 7.06448 7.33337 5.08788 7.33337C3.11128 7.33337 1.50893 8.975 1.50893 11C1.50893 11.4071 1.57368 11.7987 1.6932 12.1645C1.74372 12.3192 1.76898 12.3965 1.77727 12.4493C1.78592 12.5045 1.78744 12.5355 1.78422 12.5912C1.78113 12.6446 1.76777 12.7049 1.74106 12.8256L1.3335 14.6667L3.33003 14.394C3.43901 14.3792 3.49349 14.3717 3.54108 14.372C3.59118 14.3724 3.61777 14.3751 3.6669 14.3849C3.71357 14.3942 3.78294 14.4187 3.92168 14.4676C4.28722 14.5967 4.67957 14.6667 5.08788 14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
