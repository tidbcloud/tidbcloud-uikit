import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDatabase03 = (props, ref) => {
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
        d="M9.33333 13.3333C9.33333 14.0696 8.73638 14.6666 8 14.6666C7.26362 14.6666 6.66667 14.0696 6.66667 13.3333M9.33333 13.3333C9.33333 12.5969 8.73638 11.9999 8 11.9999M9.33333 13.3333H14M6.66667 13.3333C6.66667 12.5969 7.26362 11.9999 8 11.9999M6.66667 13.3333H2M8 11.9999V9.33325M14 3.33325C14 4.43782 11.3137 5.33325 8 5.33325C4.68629 5.33325 2 4.43782 2 3.33325M14 3.33325C14 2.22868 11.3137 1.33325 8 1.33325C4.68629 1.33325 2 2.22868 2 3.33325M14 3.33325V7.33325C14 8.43992 11.3333 9.33325 8 9.33325M2 3.33325V7.33325C2 8.43992 4.66667 9.33325 8 9.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDatabase03)
const Database03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Database03', props.className].join(' ')}
    />
  )
})
Database03.displayName = 'IconDatabase03'
export default Database03
