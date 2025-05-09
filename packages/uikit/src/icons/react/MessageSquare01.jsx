import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMessageSquare01 = (props, ref) => {
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
        d="M2 5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.07989 14 5.2V8.8C14 9.9201 14 10.4802 13.782 10.908C13.5903 11.2843 13.2843 11.5903 12.908 11.782C12.4802 12 11.9201 12 10.8 12H6.45583C6.0398 12 5.83178 12 5.63281 12.0408C5.45628 12.0771 5.28547 12.137 5.12499 12.219C4.94411 12.3114 4.78168 12.4413 4.45681 12.7012L2.8665 13.9735C2.58911 14.1954 2.45042 14.3063 2.33369 14.3065C2.23218 14.3066 2.13615 14.2604 2.07282 14.1811C2 14.0898 2 13.9122 2 13.557V5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMessageSquare01)
const MessageSquare01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MessageSquare01', props.className].join(' ')}
    />
  )
})
MessageSquare01.displayName = 'IconMessageSquare01'
export default MessageSquare01
