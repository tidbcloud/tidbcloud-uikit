import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingBag02 = (props, ref) => {
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
        d="M10.6669 6.00016V4.00016C10.6669 2.5274 9.47299 1.3335 8.00023 1.3335C6.52747 1.3335 5.33356 2.5274 5.33356 4.00016V6.00016M2.39489 6.90147L1.99489 11.1681C1.88116 12.3813 1.8243 12.9878 2.02559 13.4563C2.20242 13.8679 2.5123 14.2082 2.90557 14.4227C3.35324 14.6668 3.96247 14.6668 5.18092 14.6668H10.8195C12.038 14.6668 12.6472 14.6668 13.0949 14.4227C13.4881 14.2082 13.798 13.8679 13.9749 13.4563C14.1762 12.9878 14.1193 12.3813 14.0056 11.1681L13.6056 6.90147C13.5095 5.87706 13.4615 5.36485 13.2311 4.97761C13.0282 4.63655 12.7284 4.36357 12.3699 4.19339C11.9629 4.00016 11.4484 4.00016 10.4195 4.00016L5.58092 4.00016C4.55202 4.00016 4.03757 4.00016 3.6305 4.19339C3.272 4.36357 2.97223 4.63655 2.76933 4.9776C2.53895 5.36485 2.49093 5.87706 2.39489 6.90147Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShoppingBag02)
const ShoppingBag02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShoppingBag02', props.className].join(' ')}
    />
  )
})
ShoppingBag02.displayName = 'IconShoppingBag02'
export default ShoppingBag02
