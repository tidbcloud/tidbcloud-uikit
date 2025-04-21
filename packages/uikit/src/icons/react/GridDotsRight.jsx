import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGridDotsRight = (props, ref) => {
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
        d="M5 2H5.00667M5 8H5.00667M5 14H5.00667M11 2H11.0067M11 8H11.0067M11 14H11.0067M8 2H8.00667M8 8H8.00667M8 14H8.00667M8 11H8.00667M8 5H8.00667M2 2H2.00667M2 8H2.00667M2 14H2.00667M2 11H2.00667M2 5H2.00667M14 14V2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGridDotsRight)
const GridDotsRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GridDotsRight', props.className].join(' ')}
    />
  )
})
GridDotsRight.displayName = 'IconGridDotsRight'
export default GridDotsRight
