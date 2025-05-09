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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.33331 5.33317V4.6665M5.33331 8.33317V7.6665M5.33331 11.3332V10.6665M4.53331 13.3332H11.4666C12.5868 13.3332 13.1468 13.3332 13.5746 13.1152C13.951 12.9234 14.2569 12.6175 14.4487 12.2412C14.6666 11.8133 14.6666 11.2533 14.6666 10.1332V5.8665C14.6666 4.7464 14.6666 4.18635 14.4487 3.75852C14.2569 3.3822 13.951 3.07624 13.5746 2.88449C13.1468 2.6665 12.5868 2.6665 11.4666 2.6665H4.53331C3.41321 2.6665 2.85316 2.6665 2.42533 2.88449C2.04901 3.07624 1.74305 3.3822 1.5513 3.75852C1.33331 4.18635 1.33331 4.7464 1.33331 5.8665V10.1332C1.33331 11.2533 1.33331 11.8133 1.5513 12.2412C1.74305 12.6175 2.04901 12.9234 2.42533 13.1152C2.85316 13.3332 3.41321 13.3332 4.53331 13.3332Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
