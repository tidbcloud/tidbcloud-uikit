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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.6667 5.33328V7.99994M6.83337 3.66661H4.53337C3.41327 3.66661 2.85322 3.66661 2.42539 3.88459C2.04907 4.07634 1.74311 4.3823 1.55136 4.75863C1.33337 5.18645 1.33337 5.7465 1.33337 6.86661L1.33337 7.66661C1.33337 8.28786 1.33338 8.59849 1.43487 8.84352C1.57019 9.17022 1.82976 9.42979 2.15646 9.56511C2.40149 9.66661 2.71212 9.66661 3.33338 9.66661V12.4999C3.33338 12.6547 3.33338 12.7321 3.3398 12.7973C3.40214 13.4303 3.90298 13.9312 4.53602 13.9935C4.60121 13.9999 4.6786 13.9999 4.83338 13.9999C4.98816 13.9999 5.06554 13.9999 5.13073 13.9935C5.76377 13.9312 6.26461 13.4303 6.32696 12.7973C6.33338 12.7321 6.33338 12.6547 6.33338 12.4999V9.66661H6.83338C8.01099 9.66661 9.45154 10.2979 10.5629 10.9037C11.2113 11.2571 11.5354 11.4339 11.7478 11.4079C11.9446 11.3837 12.0935 11.2953 12.2089 11.134C12.3334 10.96 12.3334 10.6119 12.3334 9.91575V3.41746C12.3334 2.72127 12.3334 2.37317 12.2089 2.1992C12.0935 2.03788 11.9446 1.94947 11.7478 1.92536C11.5354 1.89936 11.2113 2.07607 10.5629 2.42951C9.45154 3.03535 8.01099 3.66661 6.83337 3.66661Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
