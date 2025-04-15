import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileAttachment02 = (props, ref) => {
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
        d="M8.33333 1.3335H10.1333C11.2534 1.3335 11.8135 1.3335 12.2413 1.55148C12.6176 1.74323 12.9236 2.04919 13.1153 2.42552C13.3333 2.85334 13.3333 3.41339 13.3333 4.5335V11.4668C13.3333 12.5869 13.3333 13.147 13.1153 13.5748C12.9236 13.9511 12.6176 14.2571 12.2413 14.4488C11.8135 14.6668 11.2534 14.6668 10.1333 14.6668H5.86667C4.74656 14.6668 4.18651 14.6668 3.75869 14.4488C3.38236 14.2571 3.0764 13.9511 2.88465 13.5748C2.66667 13.147 2.66667 12.5869 2.66667 11.4668V11.0002M10.6667 8.66683H7.66667M10.6667 6.00016H8.33333M10.6667 11.3335H5.33333M4 6.66683V3.00016C4 2.44788 4.44772 2.00016 5 2.00016C5.55228 2.00016 6 2.44788 6 3.00016V6.66683C6 7.7714 5.10457 8.66683 4 8.66683C2.89543 8.66683 2 7.7714 2 6.66683V4.00016"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileAttachment02)
const FileAttachment02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileAttachment02', props.className].join(' ')}
    />
  )
})
FileAttachment02.displayName = 'IconFileAttachment02'
export default FileAttachment02
