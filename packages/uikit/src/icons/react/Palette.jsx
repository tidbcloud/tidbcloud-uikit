import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPalette = (props, ref) => {
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
        d="M1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668C9.10449 14.6668 9.99992 13.7714 9.99992 12.6668V12.3335C9.99992 12.0239 9.99992 11.8691 10.017 11.7391C10.1352 10.8416 10.8414 10.1354 11.7389 10.0173C11.8688 10.0002 12.0236 10.0002 12.3333 10.0002H12.6666C13.7712 10.0002 14.6666 9.10473 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M4.66659 8.66683C5.03478 8.66683 5.33325 8.36835 5.33325 8.00016C5.33325 7.63197 5.03478 7.3335 4.66659 7.3335C4.2984 7.3335 3.99992 7.63197 3.99992 8.00016C3.99992 8.36835 4.2984 8.66683 4.66659 8.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M10.6666 6.00016C11.0348 6.00016 11.3333 5.70169 11.3333 5.3335C11.3333 4.96531 11.0348 4.66683 10.6666 4.66683C10.2984 4.66683 9.99992 4.96531 9.99992 5.3335C9.99992 5.70169 10.2984 6.00016 10.6666 6.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M6.66659 5.3335C7.03478 5.3335 7.33325 5.03502 7.33325 4.66683C7.33325 4.29864 7.03478 4.00016 6.66659 4.00016C6.2984 4.00016 5.99992 4.29864 5.99992 4.66683C5.99992 5.03502 6.2984 5.3335 6.66659 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPalette)
const Palette = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Palette', props.className].join(' ')}
    />
  )
})
Palette.displayName = 'IconPalette'
export default Palette
