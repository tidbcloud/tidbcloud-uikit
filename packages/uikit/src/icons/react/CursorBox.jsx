import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursorBox = (props, ref) => {
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
        d="M14 6.33333V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H6.33333M11.5908 11.8075L10.4586 13.9102C10.2735 14.2539 10.181 14.4257 10.0682 14.4706C9.97031 14.5095 9.85975 14.4999 9.77006 14.4445C9.66676 14.3808 9.60541 14.1955 9.48272 13.825L7.66693 8.34087C7.55949 8.01637 7.50576 7.85411 7.54439 7.74606C7.57801 7.65202 7.65202 7.57801 7.74606 7.54439C7.85411 7.50577 8.01637 7.55949 8.34087 7.66693L13.8249 9.48274C14.1955 9.60543 14.3808 9.66678 14.4445 9.77008C14.4998 9.85977 14.5095 9.97033 14.4706 10.0682C14.4257 10.181 14.2539 10.2736 13.9102 10.4586L11.8075 11.5908C11.7552 11.619 11.729 11.6331 11.7061 11.6512C11.6857 11.6673 11.6673 11.6857 11.6512 11.7061C11.6331 11.729 11.619 11.7552 11.5908 11.8075Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursorBox)
const CursorBox = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CursorBox', props.className].join(' ')}
    />
  )
})
CursorBox.displayName = 'IconCursorBox'
export default CursorBox
