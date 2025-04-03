import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink04 = (props, ref) => {
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
        d="M5.00016 4.66675H4.66683C2.82588 4.66675 1.3335 6.15913 1.3335 8.00008C1.3335 9.84103 2.82588 11.3334 4.66683 11.3334H6.00016C7.84111 11.3334 9.3335 9.84103 9.3335 8.00008M11.0002 11.3334H11.3335C13.1744 11.3334 14.6668 9.84103 14.6668 8.00008C14.6668 6.15913 13.1744 4.66675 11.3335 4.66675H10.0002C8.15921 4.66675 6.66683 6.15913 6.66683 8.00008"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink04)
const Link04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link04', props.className].join(' ')}
    />
  )
})
Link04.displayName = 'IconLink04'
export default Link04
