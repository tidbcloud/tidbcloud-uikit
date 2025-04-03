import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle01Right = (props, ref) => {
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
        d="M11.3335 11.3333H4.66683C2.82588 11.3333 1.3335 9.84091 1.3335 7.99996C1.3335 6.15901 2.82588 4.66663 4.66683 4.66663H11.3335M11.3335 11.3333C13.1744 11.3333 14.6668 9.84091 14.6668 7.99996C14.6668 6.15901 13.1744 4.66663 11.3335 4.66663M11.3335 11.3333C9.49255 11.3333 8.00016 9.84091 8.00016 7.99996C8.00016 6.15901 9.49255 4.66663 11.3335 4.66663"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle01Right)
const Toggle01Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle01Right', props.className].join(' ')}
    />
  )
})
Toggle01Right.displayName = 'IconToggle01Right'
export default Toggle01Right
