import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTicket02 = (props, ref) => {
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
        d="M5.3335 5.33317V4.6665M5.3335 8.33317V7.6665M5.3335 11.3332V10.6665M4.5335 13.3332H11.4668C12.5869 13.3332 13.147 13.3332 13.5748 13.1152C13.9511 12.9234 14.2571 12.6175 14.4488 12.2412C14.6668 11.8133 14.6668 11.2533 14.6668 10.1332V5.8665C14.6668 4.7464 14.6668 4.18635 14.4488 3.75852C14.2571 3.3822 13.9511 3.07624 13.5748 2.88449C13.147 2.6665 12.5869 2.6665 11.4668 2.6665H4.5335C3.41339 2.6665 2.85334 2.6665 2.42552 2.88449C2.04919 3.07624 1.74323 3.3822 1.55148 3.75852C1.3335 4.18635 1.3335 4.7464 1.3335 5.8665V10.1332C1.3335 11.2533 1.3335 11.8133 1.55148 12.2412C1.74323 12.6175 2.04919 12.9234 2.42552 13.1152C2.85334 13.3332 3.41339 13.3332 4.5335 13.3332Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTicket02)
const Ticket02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Ticket02', props.className].join(' ')}
    />
  )
})
Ticket02.displayName = 'IconTicket02'
export default Ticket02
