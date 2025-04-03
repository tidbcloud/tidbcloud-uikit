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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 1.3335H2.20427C2.36828 1.3335 2.45029 1.3335 2.51628 1.36366C2.57444 1.39023 2.62373 1.43298 2.65826 1.48679C2.69745 1.54786 2.70905 1.62904 2.73225 1.7914L3.04778 4.00016M3.04778 4.00016L3.74904 9.15443C3.83803 9.80851 3.88253 10.1356 4.0389 10.3817C4.17668 10.5986 4.37422 10.7711 4.60773 10.8784C4.87274 11.0002 5.20279 11.0002 5.8629 11.0002H11.5682C12.1965 11.0002 12.5107 11.0002 12.7675 10.8871C12.9939 10.7874 13.1881 10.6267 13.3283 10.423C13.4875 10.1919 13.5462 9.88327 13.6638 9.266L14.5462 4.63329C14.5876 4.41603 14.6083 4.30741 14.5783 4.2225C14.552 4.14801 14.5001 4.08529 14.4319 4.04551C14.3541 4.00016 14.2435 4.00016 14.0223 4.00016H3.04778ZM6.66683 14.0002C6.66683 14.3684 6.36835 14.6668 6.00016 14.6668C5.63197 14.6668 5.3335 14.3684 5.3335 14.0002C5.3335 13.632 5.63197 13.3335 6.00016 13.3335C6.36835 13.3335 6.66683 13.632 6.66683 14.0002ZM12.0002 14.0002C12.0002 14.3684 11.7017 14.6668 11.3335 14.6668C10.9653 14.6668 10.6668 14.3684 10.6668 14.0002C10.6668 13.632 10.9653 13.3335 11.3335 13.3335C11.7017 13.3335 12.0002 13.632 12.0002 14.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
