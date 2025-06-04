import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPuzzlePiece01 = (props, ref) => {
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
        d="M4.99998 3.00016C4.99998 2.07969 5.74617 1.3335 6.66665 1.3335C7.58712 1.3335 8.33331 2.07969 8.33331 3.00016V4.00016H8.99998C9.93186 4.00016 10.3978 4.00016 10.7653 4.1524C11.2554 4.35539 11.6448 4.74474 11.8477 5.2348C12 5.60234 12 6.06828 12 7.00016H13C13.9205 7.00016 14.6666 7.74636 14.6666 8.66683C14.6666 9.5873 13.9205 10.3335 13 10.3335H12V11.4668C12 12.5869 12 13.147 11.782 13.5748C11.5902 13.9511 11.2843 14.2571 10.908 14.4488C10.4801 14.6668 9.92008 14.6668 8.79998 14.6668H8.33331V13.5002C8.33331 12.6717 7.66174 12.0002 6.83331 12.0002C6.00489 12.0002 5.33331 12.6717 5.33331 13.5002V14.6668H4.53331C3.41321 14.6668 2.85316 14.6668 2.42533 14.4488C2.04901 14.2571 1.74305 13.9511 1.5513 13.5748C1.33331 13.147 1.33331 12.5869 1.33331 11.4668V10.3335H2.33331C3.25379 10.3335 3.99998 9.5873 3.99998 8.66683C3.99998 7.74636 3.25379 7.00016 2.33331 7.00016H1.33331C1.33331 6.06828 1.33331 5.60234 1.48555 5.2348C1.68854 4.74474 2.07789 4.35539 2.56795 4.1524C2.93549 4.00016 3.40143 4.00016 4.33331 4.00016H4.99998V3.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPuzzlePiece01)
const PuzzlePiece01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PuzzlePiece01', props.className].join(' ')}
    />
  )
})
PuzzlePiece01.displayName = 'IconPuzzlePiece01'
export default PuzzlePiece01
