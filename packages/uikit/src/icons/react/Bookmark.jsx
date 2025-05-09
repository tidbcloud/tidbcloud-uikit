import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBookmark = (props, ref) => {
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
        d="M3.33334 5.2C3.33334 4.0799 3.33334 3.51984 3.55132 3.09202C3.74307 2.71569 4.04903 2.40973 4.42535 2.21799C4.85318 2 5.41323 2 6.53334 2H9.46667C10.5868 2 11.1468 2 11.5747 2.21799C11.951 2.40973 12.2569 2.71569 12.4487 3.09202C12.6667 3.51984 12.6667 4.0799 12.6667 5.2V14L8 11.3333L3.33334 14V5.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBookmark)
const Bookmark = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Bookmark', props.className].join(' ')}
    />
  )
})
Bookmark.displayName = 'IconBookmark'
export default Bookmark
