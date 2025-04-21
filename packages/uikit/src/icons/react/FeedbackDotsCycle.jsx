import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFeedbackDotsCycle = (props, ref) => {
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
        d="M5.00016 8.00001H5.00683M8.00016 8.00001H8.00683M11.0002 8.00001H11.0068M14.6668 8.00001C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00001C1.3335 4.31811 4.31826 1.33334 8.00016 1.33334C11.6821 1.33334 14.6668 4.31811 14.6668 8.00001ZM5.3335 8.00001C5.3335 8.18411 5.18426 8.33334 5.00016 8.33334C4.81607 8.33334 4.66683 8.18411 4.66683 8.00001C4.66683 7.81592 4.81607 7.66668 5.00016 7.66668C5.18426 7.66668 5.3335 7.81592 5.3335 8.00001ZM8.3335 8.00001C8.3335 8.18411 8.18426 8.33334 8.00016 8.33334C7.81607 8.33334 7.66683 8.18411 7.66683 8.00001C7.66683 7.81592 7.81607 7.66668 8.00016 7.66668C8.18426 7.66668 8.3335 7.81592 8.3335 8.00001ZM11.3335 8.00001C11.3335 8.18411 11.1843 8.33334 11.0002 8.33334C10.8161 8.33334 10.6668 8.18411 10.6668 8.00001C10.6668 7.81592 10.8161 7.66668 11.0002 7.66668C11.1843 7.66668 11.3335 7.81592 11.3335 8.00001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFeedbackDotsCycle)
const FeedbackDotsCycle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FeedbackDotsCycle', props.className].join(' ')}
    />
  )
})
FeedbackDotsCycle.displayName = 'IconFeedbackDotsCycle'
export default FeedbackDotsCycle
