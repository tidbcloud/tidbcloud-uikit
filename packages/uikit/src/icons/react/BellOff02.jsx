import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellOff02 = (props, ref) => {
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
        d="M9.33333 13.9999H6.66667M5.75537 2.02239C6.41306 1.57652 7.19399 1.33325 8 1.33325C9.06086 1.33325 10.0783 1.75468 10.8284 2.50482C11.5786 3.25497 12 4.27239 12 5.33325C12 6.73377 12.1801 7.83406 12.4323 8.68819M4.17245 4.17141C4.05911 4.54476 4 4.93596 4 5.33325C4 7.39337 3.48031 8.80389 2.89978 9.73686C2.41008 10.5238 2.16524 10.9173 2.17422 11.0271C2.18416 11.1486 2.20991 11.195 2.30785 11.2676C2.39631 11.3333 2.79506 11.3333 3.59257 11.3333H11.3333M14 13.9999L2 1.99992"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellOff02)
const BellOff02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BellOff02', props.className].join(' ')}
    />
  )
})
BellOff02.displayName = 'IconBellOff02'
export default BellOff02
