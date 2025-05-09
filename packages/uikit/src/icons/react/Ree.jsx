import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRee = (props, ref) => {
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
        d="M3.3335 5.96232V14L8.00016 11.3333L12.6668 14V5.96232M3.3335 5.96232V5.2C3.3335 4.0799 3.3335 3.51984 3.55148 3.09202C3.74323 2.71569 4.04919 2.40973 4.42552 2.21799C4.85334 2 5.41339 2 6.5335 2H9.46683C10.5869 2 11.147 2 11.5748 2.21799C11.9511 2.40973 12.2571 2.71569 12.4488 3.09202C12.6668 3.51984 12.6668 4.0799 12.6668 5.2V5.96232M3.3335 5.96232H12.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRee)
const Ree = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Ree', props.className].join(' ')}
    />
  )
})
Ree.displayName = 'IconRee'
export default Ree
