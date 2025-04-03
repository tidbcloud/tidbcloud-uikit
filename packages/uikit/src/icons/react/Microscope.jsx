import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicroscope = (props, ref) => {
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
        d="M2 14.6668H8M7.33333 4.16819C7.75949 4.0585 8.20627 4.00016 8.66667 4.00016C11.6122 4.00016 14 6.38798 14 9.3335C14 11.5717 12.6212 13.488 10.6667 14.2792M3.66667 8.66683H6.33333C6.6431 8.66683 6.79799 8.66683 6.92679 8.69245C7.45571 8.79766 7.86917 9.21112 7.97438 9.74004C8 9.86884 8 10.0237 8 10.3335C8 10.6433 8 10.7982 7.97438 10.927C7.86917 11.4559 7.45571 11.8693 6.92679 11.9745C6.79799 12.0002 6.6431 12.0002 6.33333 12.0002H3.66667C3.3569 12.0002 3.20201 12.0002 3.07321 11.9745C2.54429 11.8693 2.13083 11.4559 2.02562 10.927C2 10.7982 2 10.6433 2 10.3335C2 10.0237 2 9.86884 2.02562 9.74004C2.13083 9.21112 2.54429 8.79766 3.07321 8.69245C3.20201 8.66683 3.3569 8.66683 3.66667 8.66683ZM2.66667 3.66683V8.66683H7.33333V3.66683C7.33333 2.37817 6.28866 1.3335 5 1.3335C3.71134 1.3335 2.66667 2.37817 2.66667 3.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicroscope)
const Microscope = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Microscope', props.className].join(' ')}
    />
  )
})
Microscope.displayName = 'IconMicroscope'
export default Microscope
