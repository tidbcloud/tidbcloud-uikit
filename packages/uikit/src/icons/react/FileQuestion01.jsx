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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M13.3333 6.3335V4.5335C13.3333 3.41339 13.3333 2.85334 13.1153 2.42552C12.9236 2.04919 12.6176 1.74323 12.2413 1.55148C11.8135 1.3335 11.2534 1.3335 10.1333 1.3335H5.86663C4.74652 1.3335 4.18647 1.3335 3.75865 1.55148C3.38232 1.74323 3.07636 2.04919 2.88461 2.42552C2.66663 2.85334 2.66663 3.41339 2.66663 4.5335V11.4668C2.66663 12.5869 2.66663 13.147 2.88461 13.5748C3.07636 13.9511 3.38232 14.2571 3.75865 14.4488C4.18647 14.6668 4.74652 14.6668 5.86663 14.6668H9.33329M11 10.0017C11.1174 9.66774 11.3493 9.38617 11.6544 9.20681C11.9596 9.02746 12.3184 8.9619 12.6673 9.02174C13.0162 9.08158 13.3326 9.26297 13.5606 9.53377C13.7885 9.80457 13.9133 10.1473 13.9128 10.5013C13.9128 11.5005 12.4139 12.0002 12.4139 12.0002M12.4333 14.0002H12.44"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
