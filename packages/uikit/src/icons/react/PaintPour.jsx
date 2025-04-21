import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPaintPour = (props, ref) => {
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
        d="M10.6665 7.3335L1.33313 7.3335M6.66647 2.66683L5.33313 1.3335M9.33313 14.6668L1.33313 14.6668M14.6665 10.6668C14.6665 11.4032 14.0695 12.0002 13.3331 12.0002C12.5968 12.0002 11.9998 11.4032 11.9998 10.6668C11.9998 9.93045 13.3331 8.66683 13.3331 8.66683C13.3331 8.66683 14.6665 9.93045 14.6665 10.6668ZM5.9998 2.00016L10.5789 6.57925C10.8429 6.84326 10.9749 6.97527 11.0244 7.12748C11.0679 7.26138 11.0679 7.40561 11.0244 7.53951C10.9749 7.69173 10.8429 7.82373 10.5789 8.08774L7.50829 11.1583C6.98027 11.6864 6.71626 11.9504 6.41182 12.0493C6.14403 12.1363 5.85557 12.1363 5.58778 12.0493C5.28334 11.9504 5.01933 11.6864 4.4913 11.1583L2.17496 8.84199C1.64694 8.31397 1.38293 8.04996 1.28401 7.74552C1.197 7.47773 1.197 7.18926 1.28401 6.92147C1.38293 6.61704 1.64694 6.35302 2.17496 5.825L5.9998 2.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPaintPour)
const PaintPour = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PaintPour', props.className].join(' ')}
    />
  )
})
PaintPour.displayName = 'IconPaintPour'
export default PaintPour
