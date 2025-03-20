import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPuzzlePiece02 = (props, ref) => {
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
        d="m12 2 3.6 3.6c2.4-6.3 9.1.4 2.8 2.8L22 12l-3.6 3.6c-2.4-6.3-9.1.4-2.8 2.8L12 22l-3.6-3.6C6 24.7-.7 18 5.6 15.6L2 12l3.6-3.6C8 14.7 14.7 8 8.4 5.6z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPuzzlePiece02)
const PuzzlePiece02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PuzzlePiece02'].join(' ')}
    />
  )
})
PuzzlePiece02.displayName = 'IconPuzzlePiece02'
export default PuzzlePiece02
