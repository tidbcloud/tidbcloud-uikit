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
      ref={ref}
      {...props}
    >
      <path
        d="M10.6671 6.00016V4.00016C10.6671 2.5274 9.47317 1.3335 8.00041 1.3335C6.52765 1.3335 5.33374 2.5274 5.33374 4.00016V6.00016M2.39508 6.90147L1.99508 11.1681C1.88135 12.3813 1.82448 12.9878 2.02578 13.4563C2.20261 13.8679 2.51249 14.2082 2.90575 14.4227C3.35343 14.6668 3.96265 14.6668 5.18111 14.6668H10.8197C12.0382 14.6668 12.6474 14.6668 13.0951 14.4227C13.4883 14.2082 13.7982 13.8679 13.975 13.4563C14.1763 12.9878 14.1195 12.3813 14.0057 11.1681L13.6057 6.90147C13.5097 5.87706 13.4617 5.36485 13.2313 4.97761C13.0284 4.63655 12.7286 4.36357 12.3701 4.19339C11.9631 4.00016 11.4486 4.00016 10.4197 4.00016L5.58111 4.00016C4.5522 4.00016 4.03775 4.00016 3.63069 4.19339C3.27219 4.36357 2.97241 4.63655 2.76952 4.9776C2.53914 5.36485 2.49112 5.87706 2.39508 6.90147Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
