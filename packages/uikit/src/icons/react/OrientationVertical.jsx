import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconOrientationVertical = (props, ref) => {
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
      <path d="M2.66699 8.66675H5.33366V13.3334H2.66699V8.66675Z" fill="#383E40" />
      <path d="M6.66699 6.00008H9.33366V13.3334H6.66699V6.00008Z" fill="#383E40" />
      <path d="M10.667 2.66675H13.3337V13.3334H10.667V2.66675Z" fill="#383E40" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconOrientationVertical)
const OrientationVertical = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'OrientationVertical', props.className].join(' ')}
    />
  )
})
OrientationVertical.displayName = 'IconOrientationVertical'
export default OrientationVertical
