import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursorClick02 = (props, ref) => {
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
        d="M5.99992 2.3335V1.3335M3.37369 3.37394L2.66659 2.66683M3.37369 8.66683L2.66659 9.37394M8.66659 3.37394L9.37369 2.66683M2.33325 6.00016H1.33325M5.66659 5.66683L8.40733 14.1853L10.3333 12.2594L12.7407 14.6668L14.6666 12.7409L12.2592 10.3335L14.1851 8.40757L5.66659 5.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursorClick02)
const CursorClick02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CursorClick02', props.className].join(' ')}
    />
  )
})
CursorClick02.displayName = 'IconCursorClick02'
export default CursorClick02
