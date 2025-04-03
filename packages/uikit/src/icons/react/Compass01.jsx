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
      ref={ref}
      {...props}
    >
      <path
        d="M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668M14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335M14.6668 8.00016H13.3335M8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016M8.00016 14.6668V13.3335M1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335M1.3335 8.00016H2.66683M8.00016 1.3335V2.66683M12.7142 12.7142L11.7714 11.7714M4.22893 4.22893L3.28612 3.28612M11.7714 4.22893L12.7142 3.28612M3.28612 12.7142L4.22893 11.7714M5.3335 8.00016L7.00016 7.00016L8.00016 5.3335L9.00016 7.00016L10.6668 8.00016L9.00016 9.00016L8.00016 10.6668L7.00016 9.00016L5.3335 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
