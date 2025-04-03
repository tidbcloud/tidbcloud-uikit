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
      ref={ref}
      {...props}
    >
      <path
        d="M6.2738 1.55963C8.49791 0.965678 10.9693 1.54113 12.7142 3.286C15.3177 5.88949 15.3177 10.1106 12.7142 12.7141C10.1107 15.3176 5.88961 15.3176 3.28612 12.7141C1.54126 10.9692 0.965799 8.49778 1.55975 6.27367M10.0003 6.00004V10M10.0003 10H6.00025M10.0003 10L3.33346 3.33334"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
