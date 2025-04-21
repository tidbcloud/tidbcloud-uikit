import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckVerified01 = (props, ref) => {
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
        d="M6 8.00004L7.33334 9.33337L10.3333 6.33337M4.88918 2.54584C5.42507 2.50307 5.93381 2.29235 6.34298 1.94365C7.29782 1.12995 8.70219 1.12995 9.65702 1.94365C10.0662 2.29235 10.5749 2.50307 11.1108 2.54584C12.3614 2.64563 13.3544 3.63867 13.4542 4.88922C13.497 5.42511 13.7077 5.93385 14.0564 6.34302C14.8701 7.29786 14.8701 8.70222 14.0564 9.65706C13.7077 10.0662 13.497 10.575 13.4542 11.1109C13.3544 12.3614 12.3614 13.3544 11.1108 13.4542C10.5749 13.497 10.0662 13.7077 9.65702 14.0564C8.70219 14.8701 7.29782 14.8701 6.34298 14.0564C5.93381 13.7077 5.42507 13.497 4.88918 13.4542C3.63863 13.3544 2.64559 12.3614 2.5458 11.1109C2.50304 10.575 2.29231 10.0662 1.94362 9.65706C1.12991 8.70222 1.12991 7.29786 1.94362 6.34302C2.29231 5.93385 2.50304 5.42511 2.5458 4.88922C2.64559 3.63867 3.63863 2.64563 4.88918 2.54584Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckVerified01)
const CheckVerified01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CheckVerified01', props.className].join(' ')}
    />
  )
})
CheckVerified01.displayName = 'IconCheckVerified01'
export default CheckVerified01
