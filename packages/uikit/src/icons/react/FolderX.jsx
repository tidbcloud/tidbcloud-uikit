import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFolderX = (props, ref) => {
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
        d="M8.66659 4.66667L7.92289 3.17928C7.70885 2.7512 7.60183 2.53715 7.44217 2.38078C7.30097 2.24249 7.1308 2.13732 6.94397 2.07287C6.73269 2 6.49339 2 6.01478 2H3.46659C2.71985 2 2.34648 2 2.06126 2.14532C1.81038 2.27316 1.60641 2.47713 1.47858 2.72801C1.33325 3.01323 1.33325 3.3866 1.33325 4.13333V4.66667M1.33325 4.66667H11.4666C12.5867 4.66667 13.1467 4.66667 13.5746 4.88465C13.9509 5.0764 14.2569 5.38236 14.4486 5.75869C14.6666 6.18651 14.6666 6.74656 14.6666 7.86667V10.8C14.6666 11.9201 14.6666 12.4802 14.4486 12.908C14.2569 13.2843 13.9509 13.5903 13.5746 13.782C13.1467 14 12.5867 14 11.4666 14H4.53325C3.41315 14 2.85309 14 2.42527 13.782C2.04895 13.5903 1.74299 13.2843 1.55124 12.908C1.33325 12.4802 1.33325 11.9201 1.33325 10.8V4.66667ZM6.33325 7.66667L9.66659 11M9.66659 7.66667L6.33325 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFolderX)
const FolderX = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FolderX', props.className].join(' ')}
    />
  )
})
FolderX.displayName = 'IconFolderX'
export default FolderX
