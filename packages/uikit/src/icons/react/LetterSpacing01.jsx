import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLetterSpacing01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 13h6m-8 4 4.272-9.398c.231-.509.347-.763.507-.842a.5.5 0 0 1 .442 0c.16.079.276.333.507.842L17 17m4-14v18M3 3v18"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLetterSpacing01)
const LetterSpacing01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'LetterSpacing01'].join(' ')}
    />
  )
})
LetterSpacing01.displayName = 'IconLetterSpacing01'
export default LetterSpacing01
