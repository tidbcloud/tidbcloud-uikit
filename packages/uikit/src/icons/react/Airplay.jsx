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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.33325 12C2.22868 12 1.33325 11.1046 1.33325 10V5.2C1.33325 4.0799 1.33325 3.51984 1.55124 3.09202C1.74299 2.71569 2.04895 2.40973 2.42527 2.21799C2.85309 2 3.41315 2 4.53325 2H11.4666C12.5867 2 13.1467 2 13.5746 2.21799C13.9509 2.40973 14.2569 2.71569 14.4486 3.09202C14.6666 3.51984 14.6666 4.0799 14.6666 5.2V10C14.6666 11.1046 13.7712 12 12.6666 12M5.80527 14H10.1946C10.5578 14 10.7394 14 10.8311 13.9259C10.9108 13.8615 10.9564 13.7641 10.9549 13.6616C10.9531 13.5438 10.8368 13.4043 10.6043 13.1252L8.40964 10.4917C8.26893 10.3228 8.19858 10.2384 8.11435 10.2076C8.04045 10.1806 7.95938 10.1806 7.88549 10.2076C7.80126 10.2384 7.73091 10.3228 7.5902 10.4917L5.39556 13.1252C5.16302 13.4043 5.04675 13.5438 5.04497 13.6616C5.04343 13.7641 5.08907 13.8615 5.16876 13.9259C5.26042 14 5.44204 14 5.80527 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
