import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCompass02 = (props, ref) => {
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
        d="M14.6667 8.00016H13.3333M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8 14.6668M14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8 1.3335M12.714 12.7142L11.7712 11.7714M2.66667 8.00016H1.33334M1.33334 8.00016C1.33334 11.6821 4.3181 14.6668 8 14.6668M1.33334 8.00016C1.33334 4.31826 4.3181 1.3335 8 1.3335M4.22877 4.22893L3.28596 3.28612M8 2.66683V1.3335M11.7712 4.22893L12.714 3.28612M8 14.6668V13.3335M3.28596 12.7142L4.22877 11.7714M8 5.3335L10.6667 8.00016L8 10.6668L5.33334 8.00016L8 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCompass02)
const Compass02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Compass02', props.className].join(' ')}
    />
  )
})
Compass02.displayName = 'IconCompass02'
export default Compass02
