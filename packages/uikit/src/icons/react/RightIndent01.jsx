import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRightIndent01 = (props, ref) => {
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
        d="M14 2.6665H2M14 13.3332H2M8 6.1665H2M8 9.83317H2M13.1467 5.63984L10.5689 7.57317C10.3759 7.71792 10.2794 7.79029 10.2449 7.87901C10.2147 7.95673 10.2147 8.04295 10.2449 8.12066C10.2794 8.20938 10.3759 8.28176 10.5689 8.4265L13.1467 10.3598C13.4213 10.5658 13.5586 10.6688 13.6736 10.6664C13.7736 10.6644 13.8674 10.6174 13.9291 10.5387C14 10.4481 14 10.2765 14 9.93317V6.0665C14 5.72319 14 5.55153 13.9291 5.461C13.8674 5.38223 13.7736 5.33532 13.6736 5.33324C13.5586 5.33085 13.4213 5.43385 13.1467 5.63984Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRightIndent01)
const RightIndent01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RightIndent01', props.className].join(' ')}
    />
  )
})
RightIndent01.displayName = 'IconRightIndent01'
export default RightIndent01
