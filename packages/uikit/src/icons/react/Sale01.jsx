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
      ref={ref}
      {...props}
    >
      <path
        d="M6.00016 6.00016H6.00683M10.0002 10.0002H10.0068M10.6668 5.3335L5.3335 10.6668M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016ZM6.3335 6.00016C6.3335 6.18426 6.18426 6.3335 6.00016 6.3335C5.81607 6.3335 5.66683 6.18426 5.66683 6.00016C5.66683 5.81607 5.81607 5.66683 6.00016 5.66683C6.18426 5.66683 6.3335 5.81607 6.3335 6.00016ZM10.3335 10.0002C10.3335 10.1843 10.1843 10.3335 10.0002 10.3335C9.81607 10.3335 9.66683 10.1843 9.66683 10.0002C9.66683 9.81607 9.81607 9.66683 10.0002 9.66683C10.1843 9.66683 10.3335 9.81607 10.3335 10.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
