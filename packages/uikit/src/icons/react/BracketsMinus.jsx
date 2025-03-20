import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBracketsMinus = (props, ref) => {
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
        d="M18.57 20a2.286 2.286 0 0 0 2.287-2.286v-4.571L22 12l-1.143-1.143V6.286A2.285 2.285 0 0 0 18.57 4M5.429 4a2.285 2.285 0 0 0-2.286 2.286v4.571L2 12l1.143 1.143v4.571A2.285 2.285 0 0 0 5.429 20M8 12h8"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBracketsMinus)
const BracketsMinus = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BracketsMinus'].join(' ')}
    />
  )
})
BracketsMinus.displayName = 'IconBracketsMinus'
export default BracketsMinus
