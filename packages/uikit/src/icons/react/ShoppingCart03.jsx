import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShoppingCart03 = (props, ref) => {
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
        d="M3.33359 9.3335H12.0907C12.766 9.3335 13.1036 9.3335 13.3723 9.20761C13.6091 9.09671 13.808 8.91866 13.9444 8.6956C14.0992 8.44238 14.1365 8.10683 14.211 7.43575L14.601 3.92573C14.6238 3.72075 14.6352 3.61826 14.6022 3.53894C14.5733 3.46927 14.5216 3.41148 14.4555 3.37501C14.3803 3.3335 14.2772 3.3335 14.071 3.3335H3.00026M1.3335 1.3335H2.16579C2.3422 1.3335 2.43041 1.3335 2.49942 1.36705C2.56017 1.39658 2.61052 1.44388 2.64379 1.50267C2.68158 1.56945 2.68708 1.65749 2.69808 1.83356L3.30224 11.5001C3.31325 11.6762 3.31875 11.7642 3.35654 11.831C3.38981 11.8898 3.44015 11.9371 3.5009 11.9666C3.56991 12.0002 3.65812 12.0002 3.83454 12.0002H12.6668M5.00016 14.3335H5.00683M11.0002 14.3335H11.0068M5.3335 14.3335C5.3335 14.5176 5.18426 14.6668 5.00016 14.6668C4.81607 14.6668 4.66683 14.5176 4.66683 14.3335C4.66683 14.1494 4.81607 14.0002 5.00016 14.0002C5.18426 14.0002 5.3335 14.1494 5.3335 14.3335ZM11.3335 14.3335C11.3335 14.5176 11.1843 14.6668 11.0002 14.6668C10.8161 14.6668 10.6668 14.5176 10.6668 14.3335C10.6668 14.1494 10.8161 14.0002 11.0002 14.0002C11.1843 14.0002 11.3335 14.1494 11.3335 14.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'ShoppingCart03', props.className].join(' ')}
    />
  )
})
ShoppingCart03.displayName = 'IconShoppingCart03'
export default ShoppingCart03
