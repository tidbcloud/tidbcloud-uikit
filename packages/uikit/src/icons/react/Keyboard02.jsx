import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconKeyboard02 = (props, ref) => {
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
        d="M4.66659 9.66667H11.3333M3.99992 6.66667H4.00659M6.66659 6.66667H6.67325M9.33325 6.66667H9.33992M11.9999 6.66667H12.0066M3.46659 12H12.5333C13.28 12 13.6534 12 13.9386 11.8547C14.1895 11.7268 14.3934 11.5229 14.5213 11.272C14.6666 10.9868 14.6666 10.6134 14.6666 9.86667V6.13333C14.6666 5.3866 14.6666 5.01323 14.5213 4.72801C14.3934 4.47713 14.1895 4.27316 13.9386 4.14532C13.6534 4 13.28 4 12.5333 4H3.46659C2.71985 4 2.34648 4 2.06126 4.14532C1.81038 4.27316 1.60641 4.47713 1.47858 4.72801C1.33325 5.01323 1.33325 5.3866 1.33325 6.13333V9.86667C1.33325 10.6134 1.33325 10.9868 1.47858 11.272C1.60641 11.5229 1.81038 11.7268 2.06126 11.8547C2.34648 12 2.71985 12 3.46659 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconKeyboard02)
const Keyboard02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Keyboard02', props.className].join(' ')}
    />
  )
})
Keyboard02.displayName = 'IconKeyboard02'
export default Keyboard02
