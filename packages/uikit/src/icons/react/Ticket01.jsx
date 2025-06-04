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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.66665 5.33317V4.6665M6.66665 8.33317V7.6665M6.66665 11.3332V10.6665M3.46665 2.6665H12.5333C13.28 2.6665 13.6534 2.6665 13.9386 2.81183C14.1895 2.93966 14.3935 3.14363 14.5213 3.39452C14.6666 3.67973 14.6666 4.0531 14.6666 4.79984V5.6665C13.378 5.6665 12.3333 6.71117 12.3333 7.99984C12.3333 9.2885 13.378 10.3332 14.6666 10.3332V11.1998C14.6666 11.9466 14.6666 12.3199 14.5213 12.6052C14.3935 12.856 14.1895 13.06 13.9386 13.1878C13.6534 13.3332 13.28 13.3332 12.5333 13.3332H3.46665C2.71991 13.3332 2.34654 13.3332 2.06133 13.1878C1.81044 13.06 1.60647 12.856 1.47864 12.6052C1.33331 12.3199 1.33331 11.9466 1.33331 11.1998V10.3332C2.62198 10.3332 3.66665 9.2885 3.66665 7.99984C3.66665 6.71117 2.62198 5.6665 1.33331 5.6665V4.79984C1.33331 4.0531 1.33331 3.67973 1.47864 3.39452C1.60647 3.14363 1.81044 2.93966 2.06133 2.81183C2.34654 2.6665 2.71991 2.6665 3.46665 2.6665Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
