import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBracketsEllipses = (props, ref) => {
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
        d="M12.3805 13.3334C13.2219 13.3334 13.9045 12.6514 13.9045 11.8094V8.76208L14.6665 8.00008L13.9045 7.23808V4.19075C13.9045 3.34875 13.2225 2.66675 12.3805 2.66675M3.61934 2.66675C2.77734 2.66675 2.09534 3.34875 2.09534 4.19075V7.23808L1.33334 8.00008L2.09534 8.76208V11.8094C2.09534 12.6514 2.77734 13.3334 3.61934 13.3334M5 8.00008H5.00667M8 8.00008H8.00667M11 8.00008H11.0067M5.33334 8.00008C5.33334 8.18418 5.1841 8.33341 5 8.33341C4.81591 8.33341 4.66667 8.18418 4.66667 8.00008C4.66667 7.81599 4.81591 7.66675 5 7.66675C5.1841 7.66675 5.33334 7.81599 5.33334 8.00008ZM8.33334 8.00008C8.33334 8.18418 8.1841 8.33341 8 8.33341C7.81591 8.33341 7.66667 8.18418 7.66667 8.00008C7.66667 7.81599 7.81591 7.66675 8 7.66675C8.1841 7.66675 8.33334 7.81599 8.33334 8.00008ZM11.3333 8.00008C11.3333 8.18418 11.1841 8.33341 11 8.33341C10.8159 8.33341 10.6667 8.18418 10.6667 8.00008C10.6667 7.81599 10.8159 7.66675 11 7.66675C11.1841 7.66675 11.3333 7.81599 11.3333 8.00008Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBracketsEllipses)
const BracketsEllipses = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BracketsEllipses', props.className].join(' ')}
    />
  )
})
BracketsEllipses.displayName = 'IconBracketsEllipses'
export default BracketsEllipses
