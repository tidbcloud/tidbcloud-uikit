import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMonitor03 = (props, ref) => {
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
        d="M1.33325 9.33333L14.6666 9.33333M5.33325 14H10.6666M4.53325 12H11.4666C12.5867 12 13.1467 12 13.5746 11.782C13.9509 11.5903 14.2569 11.2843 14.4486 10.908C14.6666 10.4802 14.6666 9.92011 14.6666 8.8V5.2C14.6666 4.0799 14.6666 3.51984 14.4486 3.09202C14.2569 2.71569 13.9509 2.40973 13.5746 2.21799C13.1467 2 12.5867 2 11.4666 2H4.53325C3.41315 2 2.85309 2 2.42527 2.21799C2.04895 2.40973 1.74299 2.71569 1.55124 3.09202C1.33325 3.51984 1.33325 4.07989 1.33325 5.2V8.8C1.33325 9.92011 1.33325 10.4802 1.55124 10.908C1.74299 11.2843 2.04895 11.5903 2.42527 11.782C2.85309 12 3.41315 12 4.53325 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMonitor03)
const Monitor03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Monitor03', props.className].join(' ')}
    />
  )
})
Monitor03.displayName = 'IconMonitor03'
export default Monitor03
