import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGridDotsBottom = (props, ref) => {
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
        d="M2 2H2.00667M2 8H2.00667M2 11H2.00667M2 5H2.00667M5 2H5.00667M5 8H5.00667M11 2H11.0067M11 8H11.0067M8 2H8.00667M8 8H8.00667M8 11H8.00667M8 5H8.00667M14 2H14.0067M14 8H14.0067M14 11H14.0067M14 5H14.0067M14 14H2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGridDotsBottom)
const GridDotsBottom = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GridDotsBottom', props.className].join(' ')}
    />
  )
})
GridDotsBottom.displayName = 'IconGridDotsBottom'
export default GridDotsBottom
