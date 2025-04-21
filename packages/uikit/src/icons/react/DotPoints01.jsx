import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotpoints01 = (props, ref) => {
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
        d="M14 8.00016L6 8.00016M14 4.00016L6 4.00016M14 12.0002L6 12.0002M3.33333 8.00016C3.33333 8.36835 3.03486 8.66683 2.66667 8.66683C2.29848 8.66683 2 8.36835 2 8.00016C2 7.63197 2.29848 7.3335 2.66667 7.3335C3.03486 7.3335 3.33333 7.63197 3.33333 8.00016ZM3.33333 4.00016C3.33333 4.36835 3.03486 4.66683 2.66667 4.66683C2.29848 4.66683 2 4.36835 2 4.00016C2 3.63197 2.29848 3.3335 2.66667 3.3335C3.03486 3.3335 3.33333 3.63197 3.33333 4.00016ZM3.33333 12.0002C3.33333 12.3684 3.03486 12.6668 2.66667 12.6668C2.29848 12.6668 2 12.3684 2 12.0002C2 11.632 2.29848 11.3335 2.66667 11.3335C3.03486 11.3335 3.33333 11.632 3.33333 12.0002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotpoints01)
const Dotpoints01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Dotpoints01', props.className].join(' ')}
    />
  )
})
Dotpoints01.displayName = 'IconDotpoints01'
export default Dotpoints01
