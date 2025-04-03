import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnouncement01 = (props, ref) => {
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
        d="M14.6668 5.33328V7.99994M6.83349 3.66661H4.5335C3.41339 3.66661 2.85334 3.66661 2.42551 3.88459C2.04919 4.07634 1.74323 4.3823 1.55148 4.75863C1.3335 5.18645 1.3335 5.7465 1.3335 6.86661L1.3335 7.66661C1.3335 8.28786 1.3335 8.59849 1.43499 8.84352C1.57032 9.17022 1.82988 9.42979 2.15658 9.56511C2.40161 9.66661 2.71224 9.66661 3.3335 9.66661V12.4999C3.3335 12.6547 3.3335 12.7321 3.33992 12.7973C3.40227 13.4303 3.90311 13.9312 4.53614 13.9935C4.60133 13.9999 4.67872 13.9999 4.8335 13.9999C4.98828 13.9999 5.06567 13.9999 5.13085 13.9935C5.76389 13.9312 6.26473 13.4303 6.32708 12.7973C6.3335 12.7321 6.3335 12.6547 6.3335 12.4999V9.66661H6.8335C8.01112 9.66661 9.45166 10.2979 10.563 10.9037C11.2114 11.2571 11.5356 11.4339 11.7479 11.4079C11.9448 11.3837 12.0936 11.2953 12.209 11.134C12.3335 10.96 12.3335 10.6119 12.3335 9.91575V3.41746C12.3335 2.72127 12.3335 2.37317 12.209 2.1992C12.0936 2.03788 11.9448 1.94947 11.7479 1.92536C11.5356 1.89936 11.2114 2.07607 10.563 2.42951C9.45166 3.03535 8.01111 3.66661 6.83349 3.66661Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnouncement01)
const Announcement01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Announcement01', props.className].join(' ')}
    />
  )
})
Announcement01.displayName = 'IconAnnouncement01'
export default Announcement01
