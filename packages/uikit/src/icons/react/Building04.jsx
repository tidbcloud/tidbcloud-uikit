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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.33333 4.66667H9.66666M6.33333 7.33333H9.66666M6.33333 10H9.66666M12 14V4.13333C12 3.3866 12 3.01323 11.8547 2.72801C11.7268 2.47713 11.5229 2.27316 11.272 2.14532C10.9868 2 10.6134 2 9.86666 2H6.13333C5.38659 2 5.01323 2 4.72801 2.14532C4.47713 2.27316 4.27315 2.47713 4.14532 2.72801C4 3.01323 4 3.3866 4 4.13333V14M13.3333 14H2.66666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
