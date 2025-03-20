import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemEndpoint = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.757 12c.45 0 .819-.365.776-.813a8.571 8.571 0 0 0-16.664-1.9c-.142.426.135.865.573.966.438.102.871-.174 1.023-.597a6.943 6.943 0 0 1 13.43 1.532c.053.446.413.812.862.812M4.574 14.242c-.43.13-.678.586-.507 1.003a8.57 8.57 0 0 0 7.21 5.296c.449.038.81-.335.805-.784-.005-.45-.374-.806-.821-.854a6.94 6.94 0 0 1-5.627-4.132c-.18-.413-.63-.659-1.06-.529"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.429 18.514c0 .663.511 1.2 1.143 1.2h1.06c.677 0 1.225-.575 1.225-1.285s-.548-1.286-1.224-1.286h-.98c-.676 0-1.224-.576-1.224-1.286s.548-1.286 1.224-1.286h1.061c.632 0 1.143.538 1.143 1.2"
      />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M1.714 12H12" />
      <circle cx={12} cy={12} r={1.714} fill="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemEndpoint)
const SystemEndpoint = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SystemEndpoint'].join(' ')}
    />
  )
})
SystemEndpoint.displayName = 'IconSystemEndpoint'
export default SystemEndpoint
