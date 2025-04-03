import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunset = (props, ref) => {
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
        d="M2.66683 12.0002H1.3335M4.20957 8.20957L3.26676 7.26676M11.7907 8.20957L12.7335 7.26676M14.6668 12.0002H13.3335M4.66683 12.0002C4.66683 10.1592 6.15921 8.66683 8.00016 8.66683C9.84111 8.66683 11.3335 10.1592 11.3335 12.0002M14.6668 14.6668H1.3335M10.6668 3.3335L8.00016 6.00016M8.00016 6.00016L5.3335 3.3335M8.00016 6.00016V1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunset)
const Sunset = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sunset', props.className].join(' ')}
    />
  )
})
Sunset.displayName = 'IconSunset'
export default Sunset
