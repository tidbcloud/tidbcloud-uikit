import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink02 = (props, ref) => {
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
        d="M6.00016 11.3334H4.66683C2.82588 11.3334 1.3335 9.84103 1.3335 8.00008C1.3335 6.15913 2.82588 4.66675 4.66683 4.66675H6.00016M10.0002 11.3334H11.3335C13.1744 11.3334 14.6668 9.84103 14.6668 8.00008C14.6668 6.15913 13.1744 4.66675 11.3335 4.66675H10.0002M4.66683 8.00008L11.3335 8.00008"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink02)
const Link02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link02', props.className].join(' ')}
    />
  )
})
Link02.displayName = 'IconLink02'
export default Link02
