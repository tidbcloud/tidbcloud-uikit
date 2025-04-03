import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLetterSpacing02 = (props, ref) => {
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
        d="M1.3335 12H14.6668M1.3335 12L3.3335 10M1.3335 12L3.3335 14M14.6668 12L12.6668 10M14.6668 12L12.6668 14M4.66683 2H11.3335M8.00016 2V9.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLetterSpacing02)
const LetterSpacing02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LetterSpacing02', props.className].join(' ')}
    />
  )
})
LetterSpacing02.displayName = 'IconLetterSpacing02'
export default LetterSpacing02
