import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldUser = (props, ref) => {
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
        d="M7.99967 9.66665H4.99968C4.0693 9.66665 3.60411 9.66665 3.22558 9.78147C2.37331 10.04 1.70637 10.7069 1.44783 11.5592C1.33301 11.9377 1.33301 12.4029 1.33301 13.3333M9.66634 4.33331C9.66634 5.99017 8.3232 7.33331 6.66634 7.33331C5.00949 7.33331 3.66634 5.99017 3.66634 4.33331C3.66634 2.67646 5.00949 1.33331 6.66634 1.33331C8.3232 1.33331 9.66634 2.67646 9.66634 4.33331ZM14.6663 11.0106C14.6663 12.4985 13.1048 13.5807 12.5366 13.9252C12.472 13.9643 12.4397 13.9839 12.3942 13.9941C12.3588 14.002 12.3072 14.002 12.2719 13.9941C12.2263 13.9839 12.194 13.9643 12.1294 13.9252C11.5612 13.5807 9.99967 12.4985 9.99967 11.0106V9.56097C9.99967 9.31861 9.99968 9.19744 10.0378 9.09327C10.0715 9.00125 10.1263 8.91915 10.1973 8.85405C10.2778 8.78036 10.3869 8.73782 10.6053 8.65272L12.1692 7.99998C12.2298 7.97635 12.2913 7.86665 12.2913 7.86665H12.3747C12.3747 7.86665 12.4362 7.97635 12.4969 7.99998L14.0607 8.65272C14.2791 8.73782 14.3882 8.78036 14.4687 8.85405C14.5398 8.91915 14.5945 9.00125 14.6282 9.09327C14.6663 9.19744 14.6663 9.31861 14.6663 9.56097V11.0106Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldUser)
const ShieldUser = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ShieldUser', props.className].join(' ')}
    />
  )
})
ShieldUser.displayName = 'IconShieldUser'
export default ShieldUser
