import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageHeartCircle = (props, ref) => {
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
        d="M13.9998 7.66667C13.9998 10.7963 11.4628 13.3333 8.33316 13.3333C7.61531 13.3333 6.92864 13.1999 6.2966 12.9564C6.18104 12.9118 6.12327 12.8896 6.07732 12.879C6.03213 12.8686 5.99941 12.8642 5.95307 12.8624C5.90595 12.8606 5.85426 12.866 5.75087 12.8767L2.33686 13.2296C2.01136 13.2632 1.84862 13.2801 1.75261 13.2215C1.669 13.1705 1.61204 13.0853 1.59688 12.9885C1.57948 12.8774 1.65725 12.7335 1.81279 12.4456L2.90323 10.4272C2.99303 10.261 3.03793 10.1779 3.05827 10.098C3.07835 10.019 3.08321 9.96213 3.07678 9.88095C3.07028 9.79875 3.03421 9.69175 2.96208 9.47774C2.7704 8.90906 2.6665 8.3 2.6665 7.66667C2.6665 4.53705 5.20355 2 8.33316 2C11.4628 2 13.9998 4.53705 13.9998 7.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33111 5.96617C7.7313 5.2736 6.73109 5.0873 5.97957 5.72149C5.22806 6.35567 5.12225 7.41599 5.71242 8.16604C6.07805 8.63073 6.99576 9.47943 7.64114 10.058C7.8782 10.2705 7.99673 10.3767 8.13898 10.4196C8.26101 10.4563 8.40121 10.4563 8.52324 10.4196C8.66549 10.3767 8.78402 10.2705 9.02108 10.058C9.66646 9.47943 10.5842 8.63073 10.9498 8.16604C11.54 7.41599 11.4471 6.349 10.6826 5.72149C9.91821 5.09397 8.93092 5.2736 8.33111 5.96617Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'MessageHeartCircle', props.className].join(' ')}
    />
  )
})
MessageHeartCircle.displayName = 'IconMessageHeartCircle'
export default MessageHeartCircle
