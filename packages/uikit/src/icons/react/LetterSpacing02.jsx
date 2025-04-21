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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M1.33325 12H14.6666M1.33325 12L3.33325 10M1.33325 12L3.33325 14M14.6666 12L12.6666 10M14.6666 12L12.6666 14M4.66659 2H11.3333M7.99992 2V9.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
