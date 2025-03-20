import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingCart03 = (props, ref) => {
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
        d="M5 14h13.136c1.013 0 1.52 0 1.922-.189a2 2 0 0 0 .858-.768c.232-.38.288-.883.4-1.89l.585-5.265c.035-.307.052-.46.002-.58a.5.5 0 0 0-.22-.246C21.57 5 21.416 5 21.106 5H4.5M2 2h1.248c.265 0 .397 0 .5.05a.5.5 0 0 1 .217.204c.057.1.065.232.082.496l.906 14.5c.017.264.025.396.082.496a.5.5 0 0 0 .216.204c.104.05.236.05.5.05H19M7.5 21.5h.01m8.99 0h.01M8 21.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShoppingCart03)
const ShoppingCart03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ShoppingCart03'].join(' ')}
    />
  )
})
ShoppingCart03.displayName = 'IconShoppingCart03'
export default ShoppingCart03
