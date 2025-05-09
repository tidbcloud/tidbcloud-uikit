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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.69782 13.1783C7.29725 13.8879 9.20222 13.8494 10.8335 12.9075C13.5439 11.3427 14.4725 7.87704 12.9077 5.16672L12.741 4.87804M3.09242 10.8335C1.52761 8.12314 2.45624 4.65746 5.16656 3.09265C6.79789 2.15081 8.70286 2.11227 10.3023 2.82185M1.66235 10.8892L3.48372 11.3773L3.97175 9.5559M12.0285 6.44393L12.5165 4.62256L14.3379 5.1106"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
