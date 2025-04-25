import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWallet03 = (props, ref) => {
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
        d="M11 9.33333H11.0067M2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V6C14 5.26362 13.403 4.66667 12.6667 4.66667L3.33333 4.66667C2.59695 4.66667 2 4.06971 2 3.33333ZM2 3.33333C2 2.59695 2.59695 2 3.33333 2H11.3333M11.3333 9.33333C11.3333 9.51743 11.1841 9.66667 11 9.66667C10.8159 9.66667 10.6667 9.51743 10.6667 9.33333C10.6667 9.14924 10.8159 9 11 9C11.1841 9 11.3333 9.14924 11.3333 9.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWallet03)
const Wallet03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wallet03', props.className].join(' ')}
    />
  )
})
Wallet03.displayName = 'IconWallet03'
export default Wallet03
