import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowCircleBrokenUp = (props, ref) => {
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
        d="M4.66683 13.7747C2.67416 12.622 1.3335 10.4675 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992C14.6668 10.4675 13.3262 12.622 11.3335 13.7747M10.6668 7.99996L8.00016 5.3333M8.00016 5.3333L5.3335 7.99996M8.00016 5.3333V14.6666"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowCircleBrokenUp)
const ArrowCircleBrokenUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowCircleBrokenUp', props.className].join(' ')}
    />
  )
})
ArrowCircleBrokenUp.displayName = 'IconArrowCircleBrokenUp'
export default ArrowCircleBrokenUp
