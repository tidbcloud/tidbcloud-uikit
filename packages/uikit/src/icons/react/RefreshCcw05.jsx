import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCcw05 = (props, ref) => {
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
        d="M5.69758 13.1783C7.297 13.8879 9.20197 13.8494 10.8333 12.9075C13.5436 11.3427 14.4722 7.87704 12.9074 5.16672L12.7408 4.87804M3.09217 10.8335C1.52737 8.12314 2.45599 4.65746 5.16632 3.09265C6.79764 2.15081 8.70261 2.11227 10.302 2.82185M1.66211 10.8892L3.48348 11.3773L3.97151 9.5559M12.0283 6.44393L12.5163 4.62256L14.3377 5.1106"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCcw05)
const RefreshCcw05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCcw05', props.className].join(' ')}
    />
  )
})
RefreshCcw05.displayName = 'IconRefreshCcw05'
export default RefreshCcw05
