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
      ref={ref}
      {...props}
    >
      <path
        d="M6.00016 2.3335V1.3335M3.37394 3.37394L2.66683 2.66683M3.37394 8.66683L2.66683 9.37394M8.66683 3.37394L9.37394 2.66683M2.3335 6.00016H1.3335M5.66683 5.66683L8.40757 14.1853L10.3335 12.2594L12.7409 14.6668L14.6668 12.7409L12.2594 10.3335L14.1853 8.40757L5.66683 5.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
