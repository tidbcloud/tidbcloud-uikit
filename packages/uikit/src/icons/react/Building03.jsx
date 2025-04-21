import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding03 = (props, ref) => {
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
        d="M5 4.66667H6.83334M5 7.33333H6.83334M5 10H6.83334M9.16667 4.66667H11M9.16667 7.33333H11M9.16667 10H11M13.3333 14V4.13333C13.3333 3.3866 13.3333 3.01323 13.188 2.72801C13.0602 2.47713 12.8562 2.27316 12.6053 2.14532C12.3201 2 11.9467 2 11.2 2H4.8C4.05327 2 3.6799 2 3.39468 2.14532C3.1438 2.27316 2.93983 2.47713 2.81199 2.72801C2.66667 3.01323 2.66667 3.3866 2.66667 4.13333V14M14.6667 14H1.33334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding03)
const Building03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building03', props.className].join(' ')}
    />
  )
})
Building03.displayName = 'IconBuilding03'
export default Building03
