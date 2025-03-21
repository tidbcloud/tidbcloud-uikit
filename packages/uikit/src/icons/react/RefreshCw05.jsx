import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw05 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M20.453 12.893C20.1752 15.5029 18.6964 17.9487 16.2494 19.3614C12.1839 21.7086 6.98539 20.3157 4.63818 16.2502L4.38818 15.8172M3.54613 11.107C3.82393 8.49711 5.30272 6.05138 7.74971 4.63862C11.8152 2.29141 17.0137 3.68434 19.3609 7.74983L19.6109 8.18285M3.49316 18.0661L4.22521 15.334L6.95727 16.0661M17.0424 7.93401L19.7744 8.66606L20.5065 5.93401"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw05)
const RefreshCw05 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RefreshCw05'].join(' ')}
    />
  )
})
RefreshCw05.displayName = 'IconRefreshCw05'
export default RefreshCw05
