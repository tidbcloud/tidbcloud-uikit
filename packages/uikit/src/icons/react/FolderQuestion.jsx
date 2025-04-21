import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFolderQuestion = (props, ref) => {
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
        d="M8.66671 4.66667L7.92301 3.17928C7.70898 2.7512 7.60195 2.53715 7.44229 2.38078C7.30109 2.24249 7.13092 2.13732 6.94409 2.07287C6.73282 2 6.49351 2 6.0149 2H3.46671C2.71997 2 2.3466 2 2.06139 2.14532C1.8105 2.27316 1.60653 2.47713 1.4787 2.72801C1.33337 3.01323 1.33337 3.3866 1.33337 4.13333V4.66667M1.33337 4.66667H11.4667C12.5868 4.66667 13.1469 4.66667 13.5747 4.88465C13.951 5.0764 14.257 5.38236 14.4487 5.75869C14.6667 6.18651 14.6667 6.74656 14.6667 7.86667V10.8C14.6667 11.9201 14.6667 12.4802 14.4487 12.908C14.257 13.2843 13.951 13.5903 13.5747 13.782C13.1469 14 12.5868 14 11.4667 14H4.53337C3.41327 14 2.85322 14 2.42539 13.782C2.04907 13.5903 1.74311 13.2843 1.55136 12.908C1.33337 12.4802 1.33337 11.9201 1.33337 10.8V4.66667ZM6.56677 7.83482C6.68424 7.50091 6.91609 7.21934 7.22126 7.03998C7.52644 6.86063 7.88524 6.79507 8.23412 6.85491C8.583 6.91475 8.89944 7.09614 9.1274 7.36694C9.35536 7.63774 9.48013 7.98048 9.4796 8.33445C9.4796 9.33371 7.98072 9.83333 7.98072 9.83333M8.00004 11.8333H8.00671"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFolderQuestion)
const FolderQuestion = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FolderQuestion', props.className].join(' ')}
    />
  )
})
FolderQuestion.displayName = 'IconFolderQuestion'
export default FolderQuestion
