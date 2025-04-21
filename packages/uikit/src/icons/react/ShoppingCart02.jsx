import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingCart02 = (props, ref) => {
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
        d="M4.33341 11.3335H11.5529C12.1862 11.3335 12.5028 11.3335 12.7609 11.2191C12.9884 11.1182 13.1832 10.9557 13.3231 10.7499C13.4819 10.5164 13.5385 10.2049 13.6518 9.58179L14.5523 4.6289C14.5916 4.41295 14.6112 4.30497 14.5809 4.22066C14.5543 4.14669 14.5024 4.0845 14.4344 4.04509C14.3568 4.00016 14.2471 4.00016 14.0276 4.00016H3.33341M1.33331 1.3335H2.21092C2.37271 1.3335 2.4536 1.3335 2.51903 1.36305C2.5767 1.3891 2.62576 1.43102 2.66048 1.48392C2.69987 1.54393 2.71249 1.62384 2.73772 1.78365L4.59557 13.55C4.6208 13.7098 4.63342 13.7897 4.67281 13.8497C4.70754 13.9026 4.7566 13.9446 4.81426 13.9706C4.87969 14.0002 4.96058 14.0002 5.12238 14.0002H12.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'ShoppingCart02', props.className].join(' ')}
    />
  )
})
ShoppingCart02.displayName = 'IconShoppingCart02'
export default ShoppingCart02
