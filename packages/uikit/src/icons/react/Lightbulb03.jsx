import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightbulb03 = (props, ref) => {
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
        d="M6.33325 14.6666H9.66659M9.99992 10.2175C11.5766 9.46852 12.6666 7.86152 12.6666 5.99992C12.6666 3.42259 10.5772 1.33325 7.99992 1.33325C5.42259 1.33325 3.33325 3.42259 3.33325 5.99992C3.33325 7.86152 4.42329 9.46852 5.99992 10.2175V10.6666C5.99992 11.2878 5.99992 11.5985 6.10141 11.8435C6.23674 12.1702 6.4963 12.4298 6.82301 12.5651C7.06804 12.6666 7.37866 12.6666 7.99992 12.6666C8.62117 12.6666 8.9318 12.6666 9.17683 12.5651C9.50353 12.4298 9.7631 12.1702 9.89842 11.8435C9.99992 11.5985 9.99992 11.2878 9.99992 10.6666V10.2175Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightbulb03)
const Lightbulb03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightbulb03', props.className].join(' ')}
    />
  )
})
Lightbulb03.displayName = 'IconLightbulb03'
export default Lightbulb03
