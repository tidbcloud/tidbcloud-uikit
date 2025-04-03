import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTypeStrikethrough02 = (props, ref) => {
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
        d="M5.33333 13.3333H10.6667M6.83333 7V13.3333M9.16667 9.33333V13.3333M2 2L14 14M2.66667 4.66663V3.99996C2.66667 3.63916 2.80998 3.31182 3.04279 3.07178M6.33333 2.66667H11.3333C11.9546 2.66667 12.2652 2.66667 12.5102 2.76816C12.8369 2.90349 13.0965 3.16305 13.2318 3.48976C13.3333 3.73478 13.3333 4.04541 13.3333 4.66667M6.83333 2.66667V3.33333M9.16667 2.66667V5.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTypeStrikethrough02)
const TypeStrikethrough02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TypeStrikethrough02', props.className].join(' ')}
    />
  )
})
TypeStrikethrough02.displayName = 'IconTypeStrikethrough02'
export default TypeStrikethrough02
