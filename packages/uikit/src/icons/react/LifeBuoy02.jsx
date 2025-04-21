import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLifeBuoy02 = (props, ref) => {
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
        d="M5.64298 5.64303L3.28596 3.28601M3.28596 12.7141L5.643 10.3571M10.357 10.3571L12.7141 12.7141M12.7141 3.28598L10.357 5.64301M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00004C1.33334 4.31814 4.31811 1.33337 8.00001 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004ZM11.3333 8.00004C11.3333 9.84099 9.84096 11.3334 8.00001 11.3334C6.15906 11.3334 4.66668 9.84099 4.66668 8.00004C4.66668 6.15909 6.15906 4.66671 8.00001 4.66671C9.84096 4.66671 11.3333 6.15909 11.3333 8.00004Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLifeBuoy02)
const LifeBuoy02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LifeBuoy02', props.className].join(' ')}
    />
  )
})
LifeBuoy02.displayName = 'IconLifeBuoy02'
export default LifeBuoy02
