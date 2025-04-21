import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw05 = (props, ref) => {
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
        d="M13.6354 8.59536C13.4502 10.3353 12.4643 11.9658 10.833 12.9076C8.12269 14.4724 4.65701 13.5438 3.0922 10.8335L2.92554 10.5448M2.36417 7.40467C2.54937 5.66474 3.53523 4.03426 5.16655 3.09241C7.87688 1.5276 11.3426 2.45623 12.9074 5.16655L13.074 5.45523M2.32886 12.044L2.81689 10.2227L4.63826 10.7107M11.3617 5.28934L13.183 5.77737L13.6711 3.95601"
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
      className={['tiui-icon', 'RefreshCw05', props.className].join(' ')}
    />
  )
})
RefreshCw05.displayName = 'IconRefreshCw05'
export default RefreshCw05
