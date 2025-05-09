import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPuzzlePiece02 = (props, ref) => {
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
        d="M7.99998 1.3335L10.4 3.7335C12 -0.466504 16.4666 4.00016 12.2666 5.60016L14.6666 8.00016L12.2666 10.4002C10.6666 6.20016 6.19998 10.6668 10.4 12.2668L7.99998 14.6668L5.59998 12.2668C3.99998 16.4668 -0.466687 12.0002 3.73331 10.4002L1.33331 8.00016L3.73331 5.60016C5.33331 9.80016 9.79998 5.3335 5.59998 3.7335L7.99998 1.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'PuzzlePiece02', props.className].join(' ')}
    />
  )
})
PuzzlePiece02.displayName = 'IconPuzzlePiece02'
export default PuzzlePiece02
