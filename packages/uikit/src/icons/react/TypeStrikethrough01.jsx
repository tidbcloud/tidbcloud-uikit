import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTypeStrikethrough01 = (props, ref) => {
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
        d="M2.66667 4.66667V4C2.66667 3.63919 2.80998 3.31186 3.04279 3.07181M6 13.3333H10M8 8V13.3333M2 2L14 14M6.33333 2.66667H11.3333C11.9546 2.66667 12.2652 2.66667 12.5102 2.76816C12.8369 2.90349 13.0965 3.16305 13.2318 3.48976C13.3333 3.73478 13.3333 4.04541 13.3333 4.66667M8 2.66667V4.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTypeStrikethrough01)
const TypeStrikethrough01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TypeStrikethrough01', props.className].join(' ')}
    />
  )
})
TypeStrikethrough01.displayName = 'IconTypeStrikethrough01'
export default TypeStrikethrough01
