import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMoon = (props, ref) => {
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
        d="M14.6367 8.63758C13.7188 10.2478 11.9863 11.3334 10.0002 11.3334C7.05464 11.3334 4.66683 8.94557 4.66683 6.00006C4.66683 4.01381 5.75261 2.28117 7.36301 1.36328C3.97999 1.68404 1.3335 4.53291 1.3335 7.9999C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666C11.467 14.6666 14.3157 12.0203 14.6367 8.63758Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMoon)
const Moon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Moon', props.className].join(' ')}
    />
  )
})
Moon.displayName = 'IconMoon'
export default Moon
