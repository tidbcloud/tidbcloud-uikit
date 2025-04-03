import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowsUp = (props, ref) => {
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
        d="M4.66667 13.3334V2.66669M4.66667 2.66669L2 5.33335M4.66667 2.66669L7.33333 5.33335M11.3333 13.3334V6.00002M11.3333 6.00002L8.66667 8.66669M11.3333 6.00002L14 8.66669"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowsUp)
const ArrowsUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowsUp', props.className].join(' ')}
    />
  )
})
ArrowsUp.displayName = 'IconArrowsUp'
export default ArrowsUp
