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
      ref={ref}
      {...props}
    >
      <path
        d="M1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668C9.10473 14.6668 10.0002 13.7714 10.0002 12.6668V12.3335C10.0002 12.0239 10.0002 11.8691 10.0173 11.7391C10.1354 10.8416 10.8416 10.1354 11.7391 10.0173C11.8691 10.0002 12.0239 10.0002 12.3335 10.0002H12.6668C13.7714 10.0002 14.6668 9.10473 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66683 8.66683C5.03502 8.66683 5.3335 8.36835 5.3335 8.00016C5.3335 7.63197 5.03502 7.3335 4.66683 7.3335C4.29864 7.3335 4.00016 7.63197 4.00016 8.00016C4.00016 8.36835 4.29864 8.66683 4.66683 8.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6668 6.00016C11.035 6.00016 11.3335 5.70169 11.3335 5.3335C11.3335 4.96531 11.035 4.66683 10.6668 4.66683C10.2986 4.66683 10.0002 4.96531 10.0002 5.3335C10.0002 5.70169 10.2986 6.00016 10.6668 6.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66683 5.3335C7.03502 5.3335 7.3335 5.03502 7.3335 4.66683C7.3335 4.29864 7.03502 4.00016 6.66683 4.00016C6.29864 4.00016 6.00016 4.29864 6.00016 4.66683C6.00016 5.03502 6.29864 5.3335 6.66683 5.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
