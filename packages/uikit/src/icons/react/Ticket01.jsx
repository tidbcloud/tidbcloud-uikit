import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTicket01 = (props, ref) => {
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
        d="M6.66683 5.33317V4.6665M6.66683 8.33317V7.6665M6.66683 11.3332V10.6665M3.46683 2.6665H12.5335C13.2802 2.6665 13.6536 2.6665 13.9388 2.81183C14.1897 2.93966 14.3937 3.14363 14.5215 3.39452C14.6668 3.67973 14.6668 4.0531 14.6668 4.79984V5.6665C13.3782 5.6665 12.3335 6.71117 12.3335 7.99984C12.3335 9.2885 13.3782 10.3332 14.6668 10.3332V11.1998C14.6668 11.9466 14.6668 12.3199 14.5215 12.6052C14.3937 12.856 14.1897 13.06 13.9388 13.1878C13.6536 13.3332 13.2802 13.3332 12.5335 13.3332H3.46683C2.72009 13.3332 2.34672 13.3332 2.06151 13.1878C1.81063 13.06 1.60665 12.856 1.47882 12.6052C1.3335 12.3199 1.3335 11.9466 1.3335 11.1998V10.3332C2.62216 10.3332 3.66683 9.2885 3.66683 7.99984C3.66683 6.71117 2.62216 5.6665 1.3335 5.6665V4.79984C1.3335 4.0531 1.3335 3.67973 1.47882 3.39452C1.60665 3.14363 1.81063 2.93966 2.06151 2.81183C2.34672 2.6665 2.72009 2.6665 3.46683 2.6665Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTicket01)
const Ticket01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Ticket01', props.className].join(' ')}
    />
  )
})
Ticket01.displayName = 'IconTicket01'
export default Ticket01
