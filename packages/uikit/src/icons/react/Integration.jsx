import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconIntegration = (props, ref) => {
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
      <g clipPath="url(#clip0_11949_532)">
        <path
          d="M5 3C5 2.07953 5.74619 1.33334 6.66667 1.33334C7.58714 1.33334 8.33333 2.07953 8.33333 3V4H9C9.93188 4 10.3978 4 10.7654 4.15224C11.2554 4.35523 11.6448 4.74458 11.8478 5.23464C12 5.60218 12 6.06812 12 7H13C13.9205 7 14.6667 7.74619 14.6667 8.66667C14.6667 9.58714 13.9205 10.3333 13 10.3333H12V11.4667C12 12.5868 12 13.1468 11.782 13.5746C11.5903 13.951 11.2843 14.2569 10.908 14.4487C10.4802 14.6667 9.9201 14.6667 8.8 14.6667H8.33333V13.5C8.33333 12.6716 7.66176 12 6.83333 12C6.0049 12 5.33333 12.6716 5.33333 13.5V14.6667H4.53333C3.41323 14.6667 2.85317 14.6667 2.42535 14.4487C2.04903 14.2569 1.74307 13.951 1.55132 13.5746C1.33333 13.1468 1.33333 12.5868 1.33333 11.4667V10.3333H2.33333C3.25381 10.3333 4 9.58714 4 8.66667C4 7.74619 3.25381 7 2.33333 7H1.33333C1.33333 6.06812 1.33333 5.60218 1.48557 5.23464C1.68856 4.74458 2.07791 4.35523 2.56797 4.15224C2.93551 4 3.40145 4 4.33333 4H5V3Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="clip0_11949_532">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconIntegration)
const Integration = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Integration', props.className].join(' ')}
    />
  )
})
Integration.displayName = 'IconIntegration'
export default Integration
