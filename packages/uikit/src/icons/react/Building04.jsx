import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding04 = (props, ref) => {
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
        d="M6.33317 4.66667H9.6665M6.33317 7.33333H9.6665M6.33317 10H9.6665M11.9998 14V4.13333C11.9998 3.3866 11.9998 3.01323 11.8545 2.72801C11.7267 2.47713 11.5227 2.27316 11.2718 2.14532C10.9866 2 10.6132 2 9.8665 2H6.13317C5.38643 2 5.01307 2 4.72785 2.14532C4.47697 2.27316 4.27299 2.47713 4.14516 2.72801C3.99984 3.01323 3.99984 3.3866 3.99984 4.13333V14M13.3332 14H2.6665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding04)
const Building04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building04', props.className].join(' ')}
    />
  )
})
Building04.displayName = 'IconBuilding04'
export default Building04
