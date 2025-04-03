import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenDownLeft = (props, ref) => {
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
        d="M6.00032 6.00004V10M6.00032 10H10.0003M6.00032 10L12.6669 3.33334M14.4406 6.27367C15.0345 8.49779 14.4591 10.9692 12.7142 12.7141C10.1107 15.3176 5.88961 15.3176 3.28612 12.7141C0.682622 10.1106 0.682622 5.88949 3.28612 3.286C5.03098 1.54113 7.50242 0.965677 9.72653 1.55963"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenDownLeft)
const ArrowCircleBrokenDownLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenDownLeft', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenDownLeft.displayName = 'IconArrowCircleBrokenDownLeft'
export default ArrowCircleBrokenDownLeft
