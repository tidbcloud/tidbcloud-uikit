import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrientationHorizontal = (props, ref) => {
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
      <path d="M7.33366 2.66675V5.33341L2.66699 5.33341L2.66699 2.66675L7.33366 2.66675Z" fill="#383E40" />
      <path d="M10.0003 6.66675V9.33341H2.66699L2.66699 6.66675L10.0003 6.66675Z" fill="#383E40" />
      <path d="M13.3337 10.6667V13.3334H2.66699L2.66699 10.6667H13.3337Z" fill="#383E40" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOrientationHorizontal)
const OrientationHorizontal = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'OrientationHorizontal', props.className].join(' ')}
    />
  )
})
OrientationHorizontal.displayName = 'IconOrientationHorizontal'
export default OrientationHorizontal
