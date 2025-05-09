import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMonitor02 = (props, ref) => {
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
        d="M5.04779 14C5.93766 13.5732 6.9399 13.3333 7.99992 13.3333C9.05994 13.3333 10.0622 13.5732 10.952 14M4.53325 11.3333H11.4666C12.5867 11.3333 13.1467 11.3333 13.5746 11.1153C13.9509 10.9236 14.2569 10.6176 14.4486 10.2413C14.6666 9.81349 14.6666 9.25344 14.6666 8.13333V5.2C14.6666 4.0799 14.6666 3.51984 14.4486 3.09202C14.2569 2.71569 13.9509 2.40973 13.5746 2.21799C13.1467 2 12.5867 2 11.4666 2H4.53325C3.41315 2 2.85309 2 2.42527 2.21799C2.04895 2.40973 1.74299 2.71569 1.55124 3.09202C1.33325 3.51984 1.33325 4.0799 1.33325 5.2V8.13333C1.33325 9.25344 1.33325 9.81349 1.55124 10.2413C1.74299 10.6176 2.04895 10.9236 2.42527 11.1153C2.85309 11.3333 3.41315 11.3333 4.53325 11.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMonitor02)
const Monitor02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Monitor02', props.className].join(' ')}
    />
  )
})
Monitor02.displayName = 'IconMonitor02'
export default Monitor02
