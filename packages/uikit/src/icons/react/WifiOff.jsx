import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWifiOff = (props, ref) => {
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
        d="M10.208 6.66668C11.1202 6.95089 11.975 7.41274 12.7201 8.03334M15.0534 5.66665C13.1051 3.94929 10.5972 3.00175 8.00003 3.00175C7.59669 3.00175 7.1955 3.0246 6.79823 3.06964M5.6866 10.4067C6.36341 9.92585 7.17305 9.66752 8.00327 9.66752C8.83349 9.66752 9.64314 9.92585 10.3199 10.4067M8.00008 13H8.00675M0.795654 5.80051C1.68472 4.9858 2.71234 4.31983 3.83909 3.84204M3.1547 8.16198C4.08631 7.34132 5.2279 6.75344 6.48851 6.48929M10.4656 10.5167C9.78623 9.98418 8.9302 9.66667 8.00001 9.66667C7.05574 9.66667 6.1879 9.99386 5.50366 10.5411M2.00008 2L14.0001 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWifiOff)
const WifiOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'WifiOff', props.className].join(' ')}
    />
  )
})
WifiOff.displayName = 'IconWifiOff'
export default WifiOff
