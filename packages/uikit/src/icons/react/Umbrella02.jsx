import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella02 = (props, ref) => {
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
        d="M4.66659 12.9335C4.66659 13.8908 5.41278 14.6668 6.33325 14.6668C7.25373 14.6668 7.99992 13.8908 7.99992 12.9335V7.3335M7.99992 7.3335C6.92647 7.3335 5.33325 8.00016 5.33325 8.00016C5.33325 8.00016 4.4067 7.3335 3.33325 7.3335C2.2598 7.3335 1.33325 8.00016 1.33325 8.00016C1.33325 4.31826 4.31802 1.3335 7.99992 1.3335C11.6818 1.3335 14.6666 4.31826 14.6666 8.00016C14.6666 8.00016 13.74 7.3335 12.6666 7.3335C11.5931 7.3335 10.6666 8.00016 10.6666 8.00016C10.6666 8.00016 9.07337 7.3335 7.99992 7.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella02)
const Umbrella02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Umbrella02', props.className].join(' ')}
    />
  )
})
Umbrella02.displayName = 'IconUmbrella02'
export default Umbrella02
