import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLetterSpacing02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 18h20M2 18l3-3m-3 3 3 3m17-3-3-3m3 3-3 3M7 3h10m-5 0v11"
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
      className={[props.className, 'tiui-icon', 'LetterSpacing02'].join(' ')}
    />
  )
})
LetterSpacing02.displayName = 'IconLetterSpacing02'
export default LetterSpacing02
