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
      ref={ref}
      {...props}
    >
      <path
        d="M14.6668 8.00016H13.3335M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668M14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335M12.7142 12.7142L11.7714 11.7714M2.66683 8.00016H1.3335M1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668M1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335M4.22893 4.22893L3.28612 3.28612M8.00016 2.66683V1.3335M11.7714 4.22893L12.7142 3.28612M8.00016 14.6668V13.3335M3.28612 12.7142L4.22893 11.7714M8.00016 5.3335L10.6668 8.00016L8.00016 10.6668L5.3335 8.00016L8.00016 5.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
