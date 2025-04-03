import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileQuestion01 = (props, ref) => {
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
        d="M13.3332 6.3335V4.5335C13.3332 3.41339 13.3332 2.85334 13.1152 2.42552C12.9234 2.04919 12.6175 1.74323 12.2412 1.55148C11.8133 1.3335 11.2533 1.3335 10.1332 1.3335H5.8665C4.7464 1.3335 4.18635 1.3335 3.75852 1.55148C3.3822 1.74323 3.07624 2.04919 2.88449 2.42552C2.6665 2.85334 2.6665 3.41339 2.6665 4.5335V11.4668C2.6665 12.5869 2.6665 13.147 2.88449 13.5748C3.07624 13.9511 3.3822 14.2571 3.75852 14.4488C4.18635 14.6668 4.7464 14.6668 5.8665 14.6668H9.33317M10.9998 10.0017C11.1173 9.66774 11.3492 9.38617 11.6543 9.20681C11.9595 9.02746 12.3183 8.9619 12.6672 9.02174C13.0161 9.08158 13.3325 9.26297 13.5605 9.53377C13.7884 9.80457 13.9132 10.1473 13.9127 10.5013C13.9127 11.5005 12.4138 12.0002 12.4138 12.0002M12.4332 14.0002H12.4399"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileQuestion01)
const FileQuestion01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileQuestion01', props.className].join(' ')}
    />
  )
})
FileQuestion01.displayName = 'IconFileQuestion01'
export default FileQuestion01
