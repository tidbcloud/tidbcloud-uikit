import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe021 = (props, ref) => {
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
        d="M8.00001 1.3335C9.66753 3.15906 10.6152 5.52819 10.6667 8.00016C10.6152 10.4721 9.66753 12.8413 8.00001 14.6668M8.00001 1.3335C6.33249 3.15906 5.38484 5.52819 5.33334 8.00016C5.38484 10.4721 6.33249 12.8413 8.00001 14.6668M8.00001 1.3335C4.31811 1.3335 1.33334 4.31826 1.33334 8.00016C1.33334 11.6821 4.31811 14.6668 8.00001 14.6668M8.00001 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00001 14.6668M1.66669 6.00016H14.3334M1.66668 10.0002H14.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe021)
const Globe021 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe021', props.className].join(' ')}
    />
  )
})
Globe021.displayName = 'IconGlobe021'
export default Globe021
