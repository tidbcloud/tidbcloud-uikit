import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileCheck03 = (props, ref) => {
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
        d="M9.33329 1.51318V4.26688C9.33329 4.64025 9.33329 4.82693 9.40595 4.96954C9.46987 5.09498 9.57186 5.19697 9.6973 5.26088C9.83991 5.33354 10.0266 5.33354 10.4 5.33354H13.1537M5.99996 10.6668L7.33329 12.0002L10.3333 9.00016M9.33329 1.3335H5.86663C4.74652 1.3335 4.18647 1.3335 3.75864 1.55148C3.38232 1.74323 3.07636 2.04919 2.88461 2.42552C2.66663 2.85334 2.66663 3.41339 2.66663 4.5335V11.4668C2.66663 12.5869 2.66663 13.147 2.88461 13.5748C3.07636 13.9511 3.38232 14.2571 3.75864 14.4488C4.18647 14.6668 4.74652 14.6668 5.86663 14.6668H10.1333C11.2534 14.6668 11.8134 14.6668 12.2413 14.4488C12.6176 14.2571 12.9236 13.9511 13.1153 13.5748C13.3333 13.147 13.3333 12.5869 13.3333 11.4668V5.3335L9.33329 1.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileCheck03)
const FileCheck03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileCheck03', props.className].join(' ')}
    />
  )
})
FileCheck03.displayName = 'IconFileCheck03'
export default FileCheck03
