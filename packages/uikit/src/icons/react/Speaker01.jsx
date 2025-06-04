import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeaker01 = (props, ref) => {
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
        d="M8.00008 3.99992H8.00675M5.86675 14.6666H10.1334C11.2535 14.6666 11.8136 14.6666 12.2414 14.4486C12.6177 14.2569 12.9237 13.9509 13.1154 13.5746C13.3334 13.1467 13.3334 12.5867 13.3334 11.4666V4.53325C13.3334 3.41315 13.3334 2.85309 13.1154 2.42527C12.9237 2.04895 12.6177 1.74299 12.2414 1.55124C11.8136 1.33325 11.2535 1.33325 10.1334 1.33325H5.86675C4.74664 1.33325 4.18659 1.33325 3.75877 1.55124C3.38244 1.74299 3.07648 2.04895 2.88473 2.42527C2.66675 2.85309 2.66675 3.41315 2.66675 4.53325V11.4666C2.66675 12.5867 2.66675 13.1467 2.88473 13.5746C3.07648 13.9509 3.38244 14.2569 3.75877 14.4486C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666ZM8.33341 3.99992C8.33341 4.18401 8.18418 4.33325 8.00008 4.33325C7.81599 4.33325 7.66675 4.18401 7.66675 3.99992C7.66675 3.81582 7.81599 3.66659 8.00008 3.66659C8.18418 3.66659 8.33341 3.81582 8.33341 3.99992ZM10.6667 9.33325C10.6667 10.806 9.47284 11.9999 8.00008 11.9999C6.52732 11.9999 5.33341 10.806 5.33341 9.33325C5.33341 7.86049 6.52732 6.66659 8.00008 6.66659C9.47284 6.66659 10.6667 7.86049 10.6667 9.33325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeaker01)
const Speaker01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speaker01', props.className].join(' ')}
    />
  )
})
Speaker01.displayName = 'IconSpeaker01'
export default Speaker01
