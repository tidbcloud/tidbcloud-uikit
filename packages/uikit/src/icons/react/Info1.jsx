import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconInfo1 = (props, ref) => {
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
        d="M5.33325 6.58337C4.91904 6.58337 4.58325 6.91916 4.58325 7.33337C4.58325 7.74759 4.91904 8.08337 5.33325 8.08337V6.58337ZM8.20505 7.33337H8.95505C8.95505 6.91916 8.61926 6.58337 8.20505 6.58337V7.33337ZM8.20505 12.6667H7.45505C7.45505 12.9433 7.60729 13.1974 7.85115 13.328C8.09502 13.4585 8.39093 13.4442 8.62107 13.2907L8.20505 12.6667ZM11.0826 11.6497C11.4273 11.42 11.5204 10.9543 11.2906 10.6097C11.0609 10.265 10.5952 10.1719 10.2506 10.4016L11.0826 11.6497ZM7.91659 4.00004C7.91659 3.95402 7.95389 3.91671 7.99992 3.91671V5.41671C8.78232 5.41671 9.41659 4.78244 9.41659 4.00004H7.91659ZM7.99992 3.91671C8.04594 3.91671 8.08325 3.95402 8.08325 4.00004H6.58325C6.58325 4.78244 7.21752 5.41671 7.99992 5.41671V3.91671ZM8.08325 4.00004C8.08325 4.04606 8.04594 4.08337 7.99992 4.08337V2.58337C7.21752 2.58337 6.58325 3.21764 6.58325 4.00004H8.08325ZM7.99992 4.08337C7.95389 4.08337 7.91659 4.04606 7.91659 4.00004H9.41659C9.41659 3.21764 8.78232 2.58337 7.99992 2.58337V4.08337ZM5.33325 8.08337H8.20505V6.58337H5.33325V8.08337ZM7.45505 7.33337V12.6667H8.95505V7.33337H7.45505ZM8.62107 13.2907L11.0826 11.6497L10.2506 10.4016L7.78902 12.0427L8.62107 13.2907Z"
        fill="#383E40"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconInfo1)
const Info1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Info1', props.className].join(' ')}
    />
  )
})
Info1.displayName = 'IconInfo1'
export default Info1
