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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.00008 6.00004V10M6.00008 10H10.0001M6.00008 10L12.6666 3.33334M14.4403 6.27367C15.0343 8.49779 14.4588 10.9692 12.714 12.7141C10.1105 15.3176 5.88937 15.3176 3.28587 12.7141C0.682378 10.1106 0.682378 5.88949 3.28587 3.286C5.03074 1.54113 7.50217 0.965677 9.72629 1.55963"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
