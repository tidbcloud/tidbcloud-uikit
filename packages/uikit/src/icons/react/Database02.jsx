import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase02 = (props, ref) => {
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
        d="M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22868 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22868 2 3.33325M14 3.33325V12.6666C14 13.7733 11.3333 14.6666 8 14.6666C4.66667 14.6666 2 13.7733 2 12.6666V3.33325M14 6.48006C14 7.58673 11.3333 8.48006 8 8.48006C4.66667 8.48006 2 7.58673 2 6.48006M14 9.62659C14 10.7333 11.3333 11.6266 8 11.6266C4.66667 11.6266 2 10.7333 2 9.62659"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase02)
const Database02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database02', props.className].join(' ')}
    />
  )
})
Database02.displayName = 'IconDatabase02'
export default Database02
