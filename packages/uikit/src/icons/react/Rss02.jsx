import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRss02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M3.00024 13.0225C8.18522 12.2429 11.7559 15.8146 10.9774 20.9996M3.00024 8.03784C10.938 7.25824 16.7417 13.0619 15.9621 20.9997M3.00024 3.05212C13.6919 2.27364 21.7264 10.3082 20.948 20.9998M5 21C3.89566 21 3 20.1043 3 19C3 17.8957 3.89566 17 5 17C6.10434 17 7 17.8957 7 19C7 20.1043 6.10434 21 5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRss02)
const Rss02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Rss02', props.className].join(' ')}
    />
  )
})
Rss02.displayName = 'IconRss02'
export default Rss02
