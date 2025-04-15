import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBookmarkMinus = (props, ref) => {
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
        d="M6.00016 6.66667H10.0002M12.6668 14V5.2C12.6668 4.0799 12.6668 3.51984 12.4488 3.09202C12.2571 2.71569 11.9511 2.40973 11.5748 2.21799C11.147 2 10.5869 2 9.46683 2H6.5335C5.41339 2 4.85334 2 4.42552 2.21799C4.04919 2.40973 3.74323 2.71569 3.55148 3.09202C3.3335 3.51984 3.3335 4.0799 3.3335 5.2V14L8.00016 11.3333L12.6668 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBookmarkMinus)
const BookmarkMinus = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BookmarkMinus', props.className].join(' ')}
    />
  )
})
BookmarkMinus.displayName = 'IconBookmarkMinus'
export default BookmarkMinus
