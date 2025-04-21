import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGridDotsTop = (props, ref) => {
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
        d="M2 14H2.00667M2 8H2.00667M2 11H2.00667M2 5H2.00667M5 14H5.00667M5 8H5.00667M11 14H11.0067M11 8H11.0067M8 14H8.00667M8 8H8.00667M8 11H8.00667M8 5H8.00667M14 14H14.0067M14 8H14.0067M14 11H14.0067M14 5H14.0067M14 2H2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGridDotsTop)
const GridDotsTop = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GridDotsTop', props.className].join(' ')}
    />
  )
})
GridDotsTop.displayName = 'IconGridDotsTop'
export default GridDotsTop
