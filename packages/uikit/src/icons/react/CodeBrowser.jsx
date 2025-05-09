import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodeBrowser = (props, ref) => {
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
        d="M14.6667 6H1.33334M9.33334 11.6667L11 10L9.33334 8.33333M6.66667 8.33333L5 10L6.66667 11.6667M1.33334 5.2L1.33334 10.8C1.33334 11.9201 1.33334 12.4802 1.55132 12.908C1.74307 13.2843 2.04903 13.5903 2.42535 13.782C2.85318 14 3.41323 14 4.53333 14H11.4667C12.5868 14 13.1468 14 13.5747 13.782C13.951 13.5903 14.2569 13.2843 14.4487 12.908C14.6667 12.4802 14.6667 11.9201 14.6667 10.8V5.2C14.6667 4.0799 14.6667 3.51984 14.4487 3.09202C14.2569 2.7157 13.951 2.40973 13.5747 2.21799C13.1468 2 12.5868 2 11.4667 2L4.53334 2C3.41323 2 2.85318 2 2.42536 2.21799C2.04903 2.40973 1.74307 2.71569 1.55132 3.09202C1.33334 3.51984 1.33334 4.0799 1.33334 5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCodeBrowser)
const CodeBrowser = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CodeBrowser', props.className].join(' ')}
    />
  )
})
CodeBrowser.displayName = 'IconCodeBrowser'
export default CodeBrowser
