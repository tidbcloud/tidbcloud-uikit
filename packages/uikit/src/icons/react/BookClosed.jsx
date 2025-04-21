import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBookClosed = (props, ref) => {
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
        d="M13.3334 12.6668V10.6668H4.66675C3.56218 10.6668 2.66675 11.5623 2.66675 12.6668M5.86675 14.6668H11.2001C11.9468 14.6668 12.3202 14.6668 12.6054 14.5215C12.8563 14.3937 13.0603 14.1897 13.1881 13.9388C13.3334 13.6536 13.3334 13.2802 13.3334 12.5335V3.46683C13.3334 2.72009 13.3334 2.34672 13.1881 2.06151C13.0603 1.81063 12.8563 1.60665 12.6054 1.47882C12.3202 1.3335 11.9468 1.3335 11.2001 1.3335H5.86675C4.74664 1.3335 4.18659 1.3335 3.75877 1.55148C3.38244 1.74323 3.07648 2.04919 2.88473 2.42552C2.66675 2.85334 2.66675 3.41339 2.66675 4.5335V11.4668C2.66675 12.5869 2.66675 13.147 2.88473 13.5748C3.07648 13.9511 3.38244 14.2571 3.75877 14.4488C4.18659 14.6668 4.74664 14.6668 5.86675 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBookClosed)
const BookClosed = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BookClosed', props.className].join(' ')}
    />
  )
})
BookClosed.displayName = 'IconBookClosed'
export default BookClosed
