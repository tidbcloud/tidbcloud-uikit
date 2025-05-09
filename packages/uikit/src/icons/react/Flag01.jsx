import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag01 = (props, ref) => {
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
        d="M2.66666 10.0002C2.66666 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66666 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.00016C13.3333 2.00016 12.6667 2.66683 10.6667 2.66683C8.66666 2.66683 7.33333 1.3335 5.33333 1.3335C3.33333 1.3335 2.66666 2.00016 2.66666 2.00016L2.66666 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag01)
const Flag01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag01', props.className].join(' ')}
    />
  )
})
Flag01.displayName = 'IconFlag01'
export default Flag01
