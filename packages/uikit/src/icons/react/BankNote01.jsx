import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBankNote01 = (props, ref) => {
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
        d="M6 11v4m12-6v4m-1-9c2.449 0 3.773.375 4.432.665a.7.7 0 0 1 .258.18c.076.072.215.284.25.383.06.165.06.255.06.435V16.41c0 .909 0 1.363-.136 1.597a.87.87 0 0 1-.532.44c-.255.089-.77-.01-1.8-.208-.72-.138-1.576-.24-2.532-.24-3 0-6 2-10 2-2.449 0-3.773-.375-4.432-.665-.088-.04-.132-.059-.258-.18a1.5 1.5 0 0 1-.25-.383C2 18.607 2 18.517 2 18.337V7.59c0-.909 0-1.363.136-1.597a.87.87 0 0 1 .532-.44c.255-.089.77.01 1.8.208C5.188 5.898 6.043 6 7 6c3 0 6-2 10-2m-2.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBankNote01)
const BankNote01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BankNote01'].join(' ')}
    />
  )
})
BankNote01.displayName = 'IconBankNote01'
export default BankNote01
