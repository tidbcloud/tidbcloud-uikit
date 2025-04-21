import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSale01 = (props, ref) => {
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
        d="M5.99998 6.00016H6.00665M9.99998 10.0002H10.0066M10.6666 5.3335L5.33331 10.6668M14.6666 8.00016C14.6666 11.6821 11.6819 14.6668 7.99998 14.6668C4.31808 14.6668 1.33331 11.6821 1.33331 8.00016C1.33331 4.31826 4.31808 1.3335 7.99998 1.3335C11.6819 1.3335 14.6666 4.31826 14.6666 8.00016ZM6.33331 6.00016C6.33331 6.18426 6.18407 6.3335 5.99998 6.3335C5.81588 6.3335 5.66665 6.18426 5.66665 6.00016C5.66665 5.81607 5.81588 5.66683 5.99998 5.66683C6.18407 5.66683 6.33331 5.81607 6.33331 6.00016ZM10.3333 10.0002C10.3333 10.1843 10.1841 10.3335 9.99998 10.3335C9.81588 10.3335 9.66665 10.1843 9.66665 10.0002C9.66665 9.81607 9.81588 9.66683 9.99998 9.66683C10.1841 9.66683 10.3333 9.81607 10.3333 10.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSale01)
const Sale01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sale01', props.className].join(' ')}
    />
  )
})
Sale01.displayName = 'IconSale01'
export default Sale01
