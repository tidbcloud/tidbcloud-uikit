import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFeedbackSweetCircle = (props, ref) => {
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
        d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99788 6.04525C7.33143 5.26611 6.22008 5.05653 5.38506 5.76998C4.55004 6.48344 4.43249 7.67631 5.08823 8.52011C5.50824 9.06058 6.58389 10.0628 7.30299 10.7136C7.54195 10.9298 7.66144 11.0379 7.80455 11.0813C7.92758 11.1186 8.06818 11.1186 8.19121 11.0813C8.33432 11.0379 8.45381 10.9298 8.69277 10.7136C9.41187 10.0628 10.4875 9.06058 10.9075 8.52011C11.5633 7.67631 11.4601 6.47594 10.6107 5.76998C9.76133 5.06403 8.66433 5.26611 7.99788 6.04525Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFeedbackSweetCircle)
const FeedbackSweetCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FeedbackSweetCircle', props.className].join(' ')}
    />
  )
})
FeedbackSweetCircle.displayName = 'IconFeedbackSweetCircle'
export default FeedbackSweetCircle
