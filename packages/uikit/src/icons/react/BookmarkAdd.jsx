import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBookmarkAdd = (props, ref) => {
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
        d="M8 8.66667V4.66667M6 6.66667H10M12.6667 14V5.2C12.6667 4.0799 12.6667 3.51984 12.4487 3.09202C12.2569 2.71569 11.951 2.40973 11.5747 2.21799C11.1468 2 10.5868 2 9.46667 2H6.53334C5.41323 2 4.85318 2 4.42535 2.21799C4.04903 2.40973 3.74307 2.71569 3.55132 3.09202C3.33334 3.51984 3.33334 4.0799 3.33334 5.2V14L8 11.3333L12.6667 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBookmarkAdd)
const BookmarkAdd = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BookmarkAdd', props.className].join(' ')}
    />
  )
})
BookmarkAdd.displayName = 'IconBookmarkAdd'
export default BookmarkAdd
