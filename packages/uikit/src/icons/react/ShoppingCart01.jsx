import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingCart01 = (props, ref) => {
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
        d="M1.33331 1.3335H2.20409C2.3681 1.3335 2.45011 1.3335 2.5161 1.36366C2.57426 1.39023 2.62354 1.43298 2.65808 1.48679C2.69727 1.54786 2.70887 1.62904 2.73206 1.7914L3.0476 4.00016M3.0476 4.00016L3.74886 9.15443C3.83785 9.80851 3.88235 10.1356 4.03871 10.3817C4.1765 10.5986 4.37403 10.7711 4.60755 10.8784C4.87255 11.0002 5.20261 11.0002 5.86272 11.0002H11.568C12.1963 11.0002 12.5105 11.0002 12.7673 10.8871C12.9937 10.7874 13.1879 10.6267 13.3282 10.423C13.4873 10.1919 13.5461 9.88327 13.6636 9.266L14.5461 4.63329C14.5874 4.41603 14.6081 4.30741 14.5781 4.2225C14.5518 4.14801 14.4999 4.08529 14.4317 4.04551C14.3539 4.00016 14.2433 4.00016 14.0221 4.00016H3.0476ZM6.66665 14.0002C6.66665 14.3684 6.36817 14.6668 5.99998 14.6668C5.63179 14.6668 5.33331 14.3684 5.33331 14.0002C5.33331 13.632 5.63179 13.3335 5.99998 13.3335C6.36817 13.3335 6.66665 13.632 6.66665 14.0002ZM12 14.0002C12 14.3684 11.7015 14.6668 11.3333 14.6668C10.9651 14.6668 10.6666 14.3684 10.6666 14.0002C10.6666 13.632 10.9651 13.3335 11.3333 13.3335C11.7015 13.3335 12 13.632 12 14.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShoppingCart01)
const ShoppingCart01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShoppingCart01', props.className].join(' ')}
    />
  )
})
ShoppingCart01.displayName = 'IconShoppingCart01'
export default ShoppingCart01
