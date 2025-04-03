import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileX01 = (props, ref) => {
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
        d="M13.3332 7.99992V4.53325C13.3332 3.41315 13.3332 2.85309 13.1152 2.42527C12.9234 2.04895 12.6175 1.74299 12.2412 1.55124C11.8133 1.33325 11.2533 1.33325 10.1332 1.33325H5.8665C4.7464 1.33325 4.18635 1.33325 3.75852 1.55124C3.3822 1.74299 3.07624 2.04895 2.88449 2.42527C2.6665 2.85309 2.6665 3.41315 2.6665 4.53325V11.4666C2.6665 12.5867 2.6665 13.1467 2.88449 13.5746C3.07624 13.9509 3.3822 14.2569 3.75852 14.4486C4.18635 14.6666 4.7464 14.6666 5.8665 14.6666H7.99984M10.6665 10.6666L13.9998 13.9999M13.9998 10.6666L10.6665 13.9999"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileX01)
const FileX01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileX01', props.className].join(' ')}
    />
  )
})
FileX01.displayName = 'IconFileX01'
export default FileX01
