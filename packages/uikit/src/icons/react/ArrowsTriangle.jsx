import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowsTriangle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 19h4.294c1.865 0 2.798 0 3.328-.39a2 2 0 0 0 .804-1.436c.058-.655-.429-1.451-1.401-3.043l-.997-1.631M6.13 10.605l-2.155 3.526c-.972 1.592-1.459 2.388-1.401 3.043a2 2 0 0 0 .804 1.435C3.908 19 4.841 19 6.706 19H8.5m8.389-10L14.73 5.468C13.827 3.991 13.375 3.252 12.795 3a2 2 0 0 0-1.59 0c-.581.252-1.033.99-1.935 2.468L8.25 7.137M18 5l-1.098 4.098L12.804 8M2 11.598 6.098 10.5l1.098 4.098M15.5 22l-3-3 3-3"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowsTriangle)
const ArrowsTriangle = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
ArrowsTriangle.displayName = 'IconArrowsTriangle'
export default ArrowsTriangle
