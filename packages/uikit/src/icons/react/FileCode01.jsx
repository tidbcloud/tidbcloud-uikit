import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileCode01 = (props, ref) => {
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
        d="M9.33332 1.51318V4.26688C9.33332 4.64025 9.33332 4.82693 9.40599 4.96954C9.4699 5.09498 9.57189 5.19697 9.69733 5.26088C9.83994 5.33354 10.0266 5.33354 10.4 5.33354H13.1537M9.33332 11.6668L11 10.0002L9.33332 8.3335M6.66666 8.3335L4.99999 10.0002L6.66666 11.6668M13.3333 6.65898V11.4668C13.3333 12.5869 13.3333 13.147 13.1153 13.5748C12.9236 13.9511 12.6176 14.2571 12.2413 14.4488C11.8135 14.6668 11.2534 14.6668 10.1333 14.6668H5.86666C4.74655 14.6668 4.1865 14.6668 3.75868 14.4488C3.38235 14.2571 3.07639 13.9511 2.88464 13.5748C2.66666 13.147 2.66666 12.5869 2.66666 11.4668V4.5335C2.66666 3.41339 2.66666 2.85334 2.88464 2.42552C3.07639 2.04919 3.38235 1.74323 3.75868 1.55148C4.1865 1.3335 4.74655 1.3335 5.86666 1.3335H8.00784C8.49702 1.3335 8.74161 1.3335 8.97179 1.38876C9.17586 1.43775 9.37095 1.51856 9.54989 1.62822C9.75173 1.7519 9.92468 1.92485 10.2706 2.27075L12.3961 4.39624C12.742 4.74214 12.9149 4.91509 13.0386 5.11693C13.1483 5.29587 13.2291 5.49096 13.2781 5.69503C13.3333 5.92521 13.3333 6.1698 13.3333 6.65898Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileCode01)
const FileCode01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileCode01', props.className].join(' ')}
    />
  )
})
FileCode01.displayName = 'IconFileCode01'
export default FileCode01
