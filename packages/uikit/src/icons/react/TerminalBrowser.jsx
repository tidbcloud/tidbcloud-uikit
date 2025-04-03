import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTerminalBrowser = (props, ref) => {
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
        d="M14.6668 6H1.3335M4.00016 11.6667L5.66683 10L4.00016 8.33333M7.3335 11.6667L10.0002 11.6667M1.3335 5.2L1.3335 10.8C1.3335 11.9201 1.3335 12.4802 1.55148 12.908C1.74323 13.2843 2.04919 13.5903 2.42551 13.782C2.85334 14 3.41339 14 4.53349 14H11.4668C12.5869 14 13.147 14 13.5748 13.782C13.9511 13.5903 14.2571 13.2843 14.4488 12.908C14.6668 12.4802 14.6668 11.9201 14.6668 10.8V5.2C14.6668 4.0799 14.6668 3.51984 14.4488 3.09202C14.2571 2.7157 13.9511 2.40973 13.5748 2.21799C13.147 2 12.5869 2 11.4668 2L4.5335 2C3.41339 2 2.85334 2 2.42552 2.21799C2.04919 2.40973 1.74323 2.71569 1.55148 3.09202C1.3335 3.51984 1.3335 4.0799 1.3335 5.2Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTerminalBrowser)
const TerminalBrowser = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TerminalBrowser', props.className].join(' ')}
    />
  )
})
TerminalBrowser.displayName = 'IconTerminalBrowser'
export default TerminalBrowser
