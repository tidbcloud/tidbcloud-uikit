import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReceiptCheck = (props, ref) => {
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
        d="m9 10.5 2 2L15.5 8M20 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 3 16.88 3 15.2 3H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.28 4 6.12 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReceiptCheck)
const ReceiptCheck = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ReceiptCheck'].join(' ')}
    />
  )
})
ReceiptCheck.displayName = 'IconReceiptCheck'
export default ReceiptCheck
