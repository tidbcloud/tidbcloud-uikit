import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWallet04 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 9.5V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 4 17.92 4 16.8 4H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 5.52 2 6.08 2 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 20 4.08 20 5.2 20h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 18.48 20 17.92 20 16.8v-2.3M15 12c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572c.193-.038.425-.038.89-.038h2c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038h-2c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C15 12.697 15 12.465 15 12"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWallet04)
const Wallet04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Wallet04'].join(' ')}
    />
  )
})
Wallet04.displayName = 'IconWallet04'
export default Wallet04
