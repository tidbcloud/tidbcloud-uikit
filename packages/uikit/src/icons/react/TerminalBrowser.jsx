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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.6666 6H1.33331M3.99998 11.6667L5.66665 10L3.99998 8.33333M7.33331 11.6667L9.99998 11.6667M1.33331 5.2L1.33331 10.8C1.33331 11.9201 1.33331 12.4802 1.5513 12.908C1.74305 13.2843 2.04901 13.5903 2.42533 13.782C2.85316 14 3.41321 14 4.53331 14H11.4666C12.5868 14 13.1468 14 13.5746 13.782C13.951 13.5903 14.2569 13.2843 14.4487 12.908C14.6666 12.4802 14.6666 11.9201 14.6666 10.8V5.2C14.6666 4.0799 14.6666 3.51984 14.4487 3.09202C14.2569 2.7157 13.951 2.40973 13.5746 2.21799C13.1468 2 12.5868 2 11.4666 2L4.53331 2C3.41321 2 2.85316 2 2.42533 2.21799C2.04901 2.40973 1.74305 2.71569 1.5513 3.09202C1.33331 3.51984 1.33331 4.0799 1.33331 5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
