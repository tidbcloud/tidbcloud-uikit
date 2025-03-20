import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingCart02 = (props, ref) => {
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
        d="M6.5 17h10.83c.95 0 1.424 0 1.811-.172a2 2 0 0 0 .844-.703c.238-.35.323-.818.493-1.753l1.35-7.429c.06-.324.089-.486.043-.612a.5.5 0 0 0-.22-.264C21.536 6 21.372 6 21.042 6H5.001M2 2h1.316c.243 0 .364 0 .463.044a.5.5 0 0 1 .212.182c.059.09.078.21.116.45l2.786 17.649c.038.24.057.36.116.45a.5.5 0 0 0 .212.18c.099.045.22.045.463.045H19"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShoppingCart02)
const ShoppingCart02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ShoppingCart02'].join(' ')}
    />
  )
})
ShoppingCart02.displayName = 'IconShoppingCart02'
export default ShoppingCart02
