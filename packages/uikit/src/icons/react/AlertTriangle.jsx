import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlertTriangle = (props, ref) => {
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
        d="M8 5.99991V8.66658M8 11.3332H8.00667M7.07688 2.59439L1.59362 12.0655C1.28948 12.5908 1.13742 12.8535 1.15989 13.069C1.1795 13.2571 1.27801 13.4279 1.43091 13.5391C1.60622 13.6666 1.90973 13.6666 2.51674 13.6666H13.4833C14.0903 13.6666 14.3938 13.6666 14.5691 13.5391C14.722 13.4279 14.8205 13.2571 14.8401 13.069C14.8626 12.8535 14.7105 12.5908 14.4064 12.0655L8.92312 2.59439C8.62007 2.07095 8.46855 1.80923 8.27087 1.72132C8.09843 1.64465 7.90157 1.64465 7.72913 1.72132C7.53145 1.80923 7.37992 2.07095 7.07688 2.59439Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlertTriangle)
const AlertTriangle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlertTriangle', props.className].join(' ')}
    />
  )
})
AlertTriangle.displayName = 'IconAlertTriangle'
export default AlertTriangle
