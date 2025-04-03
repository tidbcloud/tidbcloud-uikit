import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileSearch01 = (props, ref) => {
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
        d="M13.3332 7.00016V4.5335C13.3332 3.41339 13.3332 2.85334 13.1152 2.42552C12.9234 2.04919 12.6175 1.74323 12.2412 1.55148C11.8133 1.3335 11.2533 1.3335 10.1332 1.3335H5.8665C4.7464 1.3335 4.18635 1.3335 3.75852 1.55148C3.3822 1.74323 3.07624 2.04919 2.88449 2.42552C2.6665 2.85334 2.6665 3.41339 2.6665 4.5335V11.4668C2.6665 12.5869 2.6665 13.147 2.88449 13.5748C3.07624 13.9511 3.3822 14.2571 3.75852 14.4488C4.18635 14.6668 4.7464 14.6668 5.8665 14.6668H7.6665M14.6665 14.6668L13.6665 13.6668M14.3332 12.0002C14.3332 13.2888 13.2885 14.3335 11.9998 14.3335C10.7112 14.3335 9.6665 13.2888 9.6665 12.0002C9.6665 10.7115 10.7112 9.66683 11.9998 9.66683C13.2885 9.66683 14.3332 10.7115 14.3332 12.0002Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileSearch01)
const FileSearch01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileSearch01', props.className].join(' ')}
    />
  )
})
FileSearch01.displayName = 'IconFileSearch01'
export default FileSearch01
