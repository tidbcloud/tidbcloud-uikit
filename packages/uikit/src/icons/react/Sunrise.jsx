import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunrise = (props, ref) => {
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
        d="M2.66671 12.0002H1.33337M4.20945 8.20957L3.26664 7.26676M11.7906 8.20957L12.7334 7.26676M14.6667 12.0002H13.3334M4.66671 12.0002C4.66671 10.1592 6.15909 8.66683 8.00004 8.66683C9.84099 8.66683 11.3334 10.1592 11.3334 12.0002M14.6667 14.6668H1.33337M10.6667 4.00016L8.00004 1.3335M8.00004 1.3335L5.33337 4.00016M8.00004 1.3335V6.00016"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunrise)
const Sunrise = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sunrise', props.className].join(' ')}
    />
  )
})
Sunrise.displayName = 'IconSunrise'
export default Sunrise
