import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileHeart02 = (props, ref) => {
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
        d="M13.3332 6.66683V4.5335C13.3332 3.41339 13.3332 2.85334 13.1152 2.42552C12.9234 2.04919 12.6175 1.74323 12.2412 1.55148C11.8133 1.3335 11.2533 1.3335 10.1332 1.3335H5.8665C4.7464 1.3335 4.18635 1.3335 3.75852 1.55148C3.3822 1.74323 3.07624 2.04919 2.88449 2.42552C2.6665 2.85334 2.6665 3.41339 2.6665 4.5335V11.4668C2.6665 12.5869 2.6665 13.147 2.88449 13.5748C3.07624 13.9511 3.3822 14.2571 3.75852 14.4488C4.18635 14.6668 4.7464 14.6668 5.8665 14.6668H7.99984M8.33317 7.3335H5.33317M5.99984 10.0002H5.33317M10.6665 4.66683H5.33317M11.3313 9.88723C10.7982 9.28123 9.9091 9.11822 9.24109 9.67313C8.57308 10.228 8.47903 11.1558 9.00362 11.8121C9.52822 12.4684 11.3313 14.0002 11.3313 14.0002C11.3313 14.0002 13.1345 12.4684 13.6591 11.8121C14.1837 11.1558 14.1011 10.2222 13.4216 9.67313C12.7421 9.12406 11.8645 9.28123 11.3313 9.88723Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileHeart02)
const FileHeart02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileHeart02', props.className].join(' ')}
    />
  )
})
FileHeart02.displayName = 'IconFileHeart02'
export default FileHeart02
