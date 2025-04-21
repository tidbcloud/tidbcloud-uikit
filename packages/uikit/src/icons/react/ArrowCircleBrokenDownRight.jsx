import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDownRight = (props, ref) => {
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
        d="M6.27367 1.55963C8.49779 0.965678 10.9692 1.54113 12.7141 3.286C15.3176 5.88949 15.3176 10.1106 12.7141 12.7141C10.1106 15.3176 5.88949 15.3176 3.286 12.7141C1.54113 10.9692 0.965677 8.49778 1.55963 6.27367M10.0001 6.00004V10M10.0001 10H6.00013M10.0001 10L3.33334 3.33334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenDownRight)
const ArrowCircleBrokenDownRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenDownRight', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenDownRight.displayName = 'IconArrowCircleBrokenDownRight'
export default ArrowCircleBrokenDownRight
