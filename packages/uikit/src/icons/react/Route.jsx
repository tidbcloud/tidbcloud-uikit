import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRoute = (props, ref) => {
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
        d="M7.66665 3.3335H7.95624C9.98774 3.3335 11.0035 3.3335 11.3891 3.69836C11.7224 4.01374 11.8701 4.47835 11.7801 4.9283C11.676 5.44884 10.8467 6.0354 9.18817 7.20852L6.47846 9.12514C4.81992 10.2983 3.99064 10.8848 3.88654 11.4054C3.79655 11.8553 3.94426 12.3199 4.27755 12.6353C4.66314 13.0002 5.67888 13.0002 7.71038 13.0002H8.33331M5.33331 3.3335C5.33331 4.43807 4.43788 5.3335 3.33331 5.3335C2.22874 5.3335 1.33331 4.43807 1.33331 3.3335C1.33331 2.22893 2.22874 1.3335 3.33331 1.3335C4.43788 1.3335 5.33331 2.22893 5.33331 3.3335ZM14.6666 12.6668C14.6666 13.7714 13.7712 14.6668 12.6666 14.6668C11.5621 14.6668 10.6666 13.7714 10.6666 12.6668C10.6666 11.5623 11.5621 10.6668 12.6666 10.6668C13.7712 10.6668 14.6666 11.5623 14.6666 12.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRoute)
const Route = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Route', props.className].join(' ')}
    />
  )
})
Route.displayName = 'IconRoute'
export default Route
