import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowsLeft = (props, ref) => {
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
        d="M13.3333 11.3333H2.66663M2.66663 11.3333L5.33329 14M2.66663 11.3333L5.33329 8.66667M13.3333 4.66667H5.99996M5.99996 4.66667L8.66663 7.33333M5.99996 4.66667L8.66663 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowsLeft)
const ArrowsLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowsLeft', props.className].join(' ')}
    />
  )
})
ArrowsLeft.displayName = 'IconArrowsLeft'
export default ArrowsLeft
