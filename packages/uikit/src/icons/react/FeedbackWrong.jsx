import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFeedbackWrong = (props, ref) => {
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
        d="M0.666992 8.00008C0.666992 3.94999 3.95023 0.666748 8.00033 0.666748C12.0504 0.666748 15.3337 3.94999 15.3337 8.00008C15.3337 12.0502 12.0504 15.3334 8.00033 15.3334C3.95023 15.3334 0.666992 12.0502 0.666992 8.00008ZM5.80506 4.86201C5.54471 4.60166 5.1226 4.60166 4.86225 4.86201C4.6019 5.12236 4.6019 5.54447 4.86225 5.80482L7.05752 8.00008L4.86225 10.1953C4.6019 10.4557 4.6019 10.8778 4.86225 11.1382C5.1226 11.3985 5.54471 11.3985 5.80506 11.1382L8.00033 8.94289L10.1956 11.1382C10.4559 11.3985 10.878 11.3985 11.1384 11.1382C11.3987 10.8778 11.3987 10.4557 11.1384 10.1953L8.94313 8.00008L11.1384 5.80482C11.3987 5.54447 11.3987 5.12236 11.1384 4.86201C10.878 4.60166 10.4559 4.60166 10.1956 4.86201L8.00033 7.05727L5.80506 4.86201Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFeedbackWrong)
const FeedbackWrong = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FeedbackWrong', props.className].join(' ')}
    />
  )
})
FeedbackWrong.displayName = 'IconFeedbackWrong'
export default FeedbackWrong
