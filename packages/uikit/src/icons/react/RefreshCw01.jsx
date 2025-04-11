import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRefreshCw01 = (props, ref) => {
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
        d="M14.0002 6.66667C14.0002 6.66667 12.6635 4.84548 11.5776 3.75883C10.4917 2.67218 8.9911 2 7.3335 2C4.01979 2 1.3335 4.68629 1.3335 8C1.3335 11.3137 4.01979 14 7.3335 14C10.0689 14 12.3768 12.1695 13.099 9.66667M14.0002 6.66667V2.66667M14.0002 6.66667H10.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRefreshCw01)
const RefreshCw01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'RefreshCw01', props.className].join(' ')}
    />
  )
})
RefreshCw01.displayName = 'IconRefreshCw01'
export default RefreshCw01
