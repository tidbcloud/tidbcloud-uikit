import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCompass01 = (props, ref) => {
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
        d="M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8 14.6668M14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8 1.3335M14.6667 8.00016H13.3333M8 14.6668C4.3181 14.6668 1.33334 11.6821 1.33334 8.00016M8 14.6668V13.3335M1.33334 8.00016C1.33334 4.31826 4.3181 1.3335 8 1.3335M1.33334 8.00016H2.66667M8 1.3335V2.66683M12.714 12.7142L11.7712 11.7714M4.22877 4.22893L3.28596 3.28612M11.7712 4.22893L12.714 3.28612M3.28596 12.7142L4.22877 11.7714M5.33334 8.00016L7 7.00016L8 5.3335L9 7.00016L10.6667 8.00016L9 9.00016L8 10.6668L7 9.00016L5.33334 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCompass01)
const Compass01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Compass01', props.className].join(' ')}
    />
  )
})
Compass01.displayName = 'IconCompass01'
export default Compass01
