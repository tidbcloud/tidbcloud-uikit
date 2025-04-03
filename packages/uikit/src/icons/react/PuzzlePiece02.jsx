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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 1.3335L10.4002 3.7335C12.0002 -0.466504 16.4668 4.00016 12.2668 5.60016L14.6668 8.00016L12.2668 10.4002C10.6668 6.20016 6.20016 10.6668 10.4002 12.2668L8.00016 14.6668L5.60016 12.2668C4.00016 16.4668 -0.466504 12.0002 3.7335 10.4002L1.3335 8.00016L3.7335 5.60016C5.3335 9.80016 9.80016 5.3335 5.60016 3.7335L8.00016 1.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
