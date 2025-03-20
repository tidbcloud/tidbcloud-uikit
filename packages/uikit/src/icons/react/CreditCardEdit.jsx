import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCreditCardEdit = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 10h20V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m3.5 2 2.025-.405c.177-.035.265-.053.347-.085a1 1 0 0 0 .207-.111c.073-.05.136-.114.264-.242L21.5 16a1.414 1.414 0 1 0-2-2l-4.157 4.157a2 2 0 0 0-.242.264 1 1 0 0 0-.11.207c-.033.082-.05.17-.086.347z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditCardEdit)
const CreditCardEdit = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CreditCardEdit'].join(' ')}
    />
  )
})
CreditCardEdit.displayName = 'IconCreditCardEdit'
export default CreditCardEdit
