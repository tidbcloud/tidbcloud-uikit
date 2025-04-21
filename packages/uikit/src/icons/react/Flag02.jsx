import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag02 = (props, ref) => {
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
        d="M2.66666 10.0002C2.66666 10.0002 3.33333 9.3335 5.33333 9.3335C7.33333 9.3335 8.66666 10.6668 10.6667 10.6668C12.6667 10.6668 13.3333 10.0002 13.3333 10.0002V2.66683C13.3333 2.66683 12.6667 3.3335 10.6667 3.3335C8.66666 3.3335 7.33333 2.00016 5.33333 2.00016C3.33333 2.00016 2.66666 2.66683 2.66666 2.66683M2.66666 14.6668L2.66666 1.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag02)
const Flag02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag02', props.className].join(' ')}
    />
  )
})
Flag02.displayName = 'IconFlag02'
export default Flag02
