import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding06 = (props, ref) => {
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
        d="M7.33334 7.33333H4.13334C3.3866 7.33333 3.01323 7.33333 2.72802 7.47866C2.47713 7.60649 2.27316 7.81046 2.14533 8.06135C2 8.34656 2 8.71993 2 9.46667V14M14 14V4.13333C14 3.3866 14 3.01323 13.8547 2.72801C13.7268 2.47713 13.5229 2.27316 13.272 2.14532C12.9868 2 12.6134 2 11.8667 2H9.46667C8.71993 2 8.34656 2 8.06135 2.14532C7.81047 2.27316 7.60649 2.47713 7.47866 2.72801C7.33334 3.01323 7.33334 3.3866 7.33334 4.13333V14M14.6667 14H1.33334M9.66667 4.66667H11.6667M9.66667 7.33333H11.6667M9.66667 10H11.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding06)
const Building06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building06', props.className].join(' ')}
    />
  )
})
Building06.displayName = 'IconBuilding06'
export default Building06
