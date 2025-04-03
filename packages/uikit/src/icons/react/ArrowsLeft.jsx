import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowsLeft = (props, ref) => {
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
        d="M13.3332 11.3333H2.6665M2.6665 11.3333L5.33317 14M2.6665 11.3333L5.33317 8.66667M13.3332 4.66667H5.99984M5.99984 4.66667L8.6665 7.33333M5.99984 4.66667L8.6665 2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowsLeft)
const ArrowsLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowsLeft', props.className].join(' ')}
    />
  )
})
ArrowsLeft.displayName = 'IconArrowsLeft'
export default ArrowsLeft
