import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardDownload = (props, ref) => {
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
        d="m9 17 3 3m0 0 3-3m-3 3v-7m10-4H2m3.5 9h-.3c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.48 2 15.92 2 14.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 18 19.92 18 18.8 18h-.3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardDownload)
const CreditCardDownload = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CreditCardDownload'].join(' ')}
    />
  )
})
CreditCardDownload.displayName = 'IconCreditCardDownload'
export default CreditCardDownload
