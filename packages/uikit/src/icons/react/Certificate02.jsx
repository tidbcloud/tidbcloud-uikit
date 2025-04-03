import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCertificate02 = (props, ref) => {
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
        d="M6 12.3335H10M4.66667 10.0002H11.3333M3.33333 1.3335H12.6667C13.403 1.3335 14 1.99678 14 2.81498V13.1853C14 14.0035 13.403 14.6668 12.6667 14.6668H3.33333C2.59695 14.6668 2 14.0035 2 13.1853V2.81498C2 1.99678 2.59695 1.3335 3.33333 1.3335ZM7.9984 4.14146C7.53189 3.62203 6.75394 3.48231 6.16943 3.95794C5.58492 4.43358 5.50263 5.22882 5.96165 5.79136C6.42067 6.3539 7.9984 7.66683 7.9984 7.66683C7.9984 7.66683 9.57614 6.3539 10.0352 5.79136C10.4942 5.22882 10.4219 4.42858 9.82738 3.95794C9.23282 3.48731 8.46492 3.62203 7.9984 4.14146Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCertificate02)
const Certificate02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Certificate02', props.className].join(' ')}
    />
  )
})
Certificate02.displayName = 'IconCertificate02'
export default Certificate02
