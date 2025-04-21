import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe03 = (props, ref) => {
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
        d="M8.00001 1.3335C10 2.66683 10.6152 5.52818 10.6667 8.00016C10.6152 10.4721 10 13.3335 8.00001 14.6668M8.00001 1.3335C6.00001 2.66683 5.38484 5.52819 5.33334 8.00016C5.38484 10.4721 6.00001 13.3335 8.00001 14.6668M8.00001 1.3335C4.31811 1.3335 1.33334 4.31826 1.33334 8.00016M8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016M8.00001 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016M8.00001 14.6668C4.31811 14.6668 1.33334 11.6821 1.33334 8.00016M14.6667 8.00016C13.3333 10.0002 10.472 10.6153 8.00001 10.6668C5.52803 10.6153 2.66668 10.0002 1.33334 8.00016M14.6667 8.00016C13.3333 6.00016 10.472 5.38499 8.00001 5.3335C5.52803 5.38499 2.66668 6.00016 1.33334 8.00016"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe03)
const Globe03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe03', props.className].join(' ')}
    />
  )
})
Globe03.displayName = 'IconGlobe03'
export default Globe03
