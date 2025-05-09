import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFeedbackDots = (props, ref) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00033 15.3334C12.0504 15.3334 15.3337 12.0502 15.3337 8.00008C15.3337 3.94999 12.0504 0.666748 8.00033 0.666748C3.95024 0.666748 0.666992 3.94999 0.666992 8.00008C0.666992 12.0502 3.95024 15.3334 8.00033 15.3334ZM4.34814 7.00008C3.78788 7.00008 3.33366 7.44779 3.33366 8.00008C3.33366 8.55237 3.78788 9.00008 4.34814 9.00008C4.90845 9.00008 5.36263 8.55237 5.36263 8.00008C5.36263 7.44779 4.90845 7.00008 4.34814 7.00008ZM8.00033 7.00008C7.44002 7.00008 6.98584 7.44779 6.98584 8.00008C6.98584 8.55237 7.44002 9.00008 8.00033 9.00008C8.56063 9.00008 9.01481 8.55237 9.01481 8.00008C9.01481 7.44779 8.56063 7.00008 8.00033 7.00008ZM11.6525 7.00008C11.0922 7.00008 10.638 7.44779 10.638 8.00008C10.638 8.55237 11.0922 9.00008 11.6525 9.00008C12.2128 9.00008 12.667 8.55237 12.667 8.00008C12.667 7.44779 12.2128 7.00008 11.6525 7.00008Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFeedbackDots)
const FeedbackDots = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FeedbackDots', props.className].join(' ')}
    />
  )
})
FeedbackDots.displayName = 'IconFeedbackDots'
export default FeedbackDots
