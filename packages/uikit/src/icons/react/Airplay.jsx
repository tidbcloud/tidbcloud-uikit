import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAirplay = (props, ref) => {
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
        d="M3.3335 12C2.22893 12 1.3335 11.1046 1.3335 10V5.2C1.3335 4.0799 1.3335 3.51984 1.55148 3.09202C1.74323 2.71569 2.04919 2.40973 2.42552 2.21799C2.85334 2 3.41339 2 4.5335 2H11.4668C12.5869 2 13.147 2 13.5748 2.21799C13.9511 2.40973 14.2571 2.71569 14.4488 3.09202C14.6668 3.51984 14.6668 4.0799 14.6668 5.2V10C14.6668 11.1046 13.7714 12 12.6668 12M5.80552 14H10.1948C10.558 14 10.7397 14 10.8313 13.9259C10.911 13.8615 10.9567 13.7641 10.9551 13.6616C10.9533 13.5438 10.8371 13.4043 10.6045 13.1252L8.40988 10.4917C8.26918 10.3228 8.19883 10.2384 8.11459 10.2076C8.0407 10.1806 7.95963 10.1806 7.88573 10.2076C7.8015 10.2384 7.73115 10.3228 7.59045 10.4917L5.3958 13.1252C5.16326 13.4043 5.04699 13.5438 5.04521 13.6616C5.04367 13.7641 5.08932 13.8615 5.169 13.9259C5.26066 14 5.44228 14 5.80552 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAirplay)
const Airplay = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Airplay', props.className].join(' ')}
    />
  )
})
Airplay.displayName = 'IconAirplay'
export default Airplay
