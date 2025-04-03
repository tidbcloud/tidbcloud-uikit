import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnouncement02 = (props, ref) => {
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
        d="M2.66683 9.33327L3.71659 13.5323C3.74612 13.6504 3.76088 13.7095 3.77834 13.761C3.94894 14.2647 4.40251 14.6188 4.93251 14.6622C4.98676 14.6666 5.04763 14.6666 5.16936 14.6666C5.32179 14.6666 5.39801 14.6666 5.46221 14.6604C6.09683 14.5988 6.59905 14.0966 6.6606 13.462C6.66683 13.3978 6.66683 13.3216 6.66683 13.1691V3.66661M12.3335 8.99994C13.6222 8.99994 14.6668 7.95527 14.6668 6.66661C14.6668 5.37794 13.6222 4.33327 12.3335 4.33327M6.83349 3.66661H4.3335C2.67664 3.66661 1.3335 5.00975 1.3335 6.66661C1.3335 8.32346 2.67664 9.66661 4.3335 9.66661H6.8335C8.01112 9.66661 9.45166 10.2979 10.563 10.9037C11.2114 11.2571 11.5356 11.4339 11.7479 11.4079C11.9448 11.3837 12.0936 11.2953 12.209 11.134C12.3335 10.96 12.3335 10.6119 12.3335 9.91575V3.41746C12.3335 2.72127 12.3335 2.37317 12.209 2.1992C12.0936 2.03788 11.9448 1.94947 11.7479 1.92536C11.5356 1.89936 11.2114 2.07607 10.563 2.42951C9.45166 3.03535 8.01111 3.66661 6.83349 3.66661Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnouncement02)
const Announcement02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Announcement02', props.className].join(' ')}
    />
  )
})
Announcement02.displayName = 'IconAnnouncement02'
export default Announcement02
