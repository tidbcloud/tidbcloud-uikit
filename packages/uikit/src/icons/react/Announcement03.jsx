import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnnouncement03 = (props, ref) => {
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
        d="M12.3335 10.6667C13.6222 10.6667 14.6668 8.72657 14.6668 6.33333C14.6668 3.9401 13.6222 2 12.3335 2M12.3335 10.6667C11.0448 10.6667 10.0002 8.72657 10.0002 6.33333C10.0002 3.9401 11.0448 2 12.3335 2M12.3335 10.6667L3.62919 9.08407C3.01086 8.97164 2.7017 8.91543 2.45171 8.79263C1.94314 8.54282 1.5644 8.08901 1.40959 7.54395C1.3335 7.27603 1.3335 6.9618 1.3335 6.33333C1.3335 5.70487 1.3335 5.39063 1.40959 5.12271C1.5644 4.57766 1.94314 4.12385 2.45171 3.87403C2.7017 3.75124 3.01086 3.69502 3.62919 3.5826L12.3335 2M3.3335 9.33333L3.59607 13.0093C3.621 13.3584 3.63347 13.533 3.70941 13.6653C3.77628 13.7817 3.87676 13.8753 3.99769 13.9337C4.13505 14 4.31004 14 4.66002 14H5.84829C6.24839 14 6.44844 14 6.5965 13.9202C6.72661 13.8501 6.82972 13.7387 6.88965 13.6037C6.95785 13.4499 6.9425 13.2504 6.91182 12.8515L6.66683 9.66667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnnouncement03)
const Announcement03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Announcement03', props.className].join(' ')}
    />
  )
})
Announcement03.displayName = 'IconAnnouncement03'
export default Announcement03
