import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked04 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5M20 5C20 3.34315 16.4183 2 12 2C7.58172 2 4 3.34315 4 5M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5M20 9.6666C20 11.3235 16.4183 12.6666 12 12.6666C7.58172 12.6666 4 11.3235 4 9.6666M20 14.33C20 15.9869 16.4183 17.33 12 17.33C7.58172 17.33 4 15.9869 4 14.33"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked04)
const CoinsStacked04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CoinsStacked04'].join(' ')}
    />
  )
})
CoinsStacked04.displayName = 'IconCoinsStacked04'
export default CoinsStacked04
