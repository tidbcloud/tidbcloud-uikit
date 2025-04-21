import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointerOff01 = (props, ref) => {
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
        d="M7.55802 4.10744L13.5336 1.77552C13.8917 1.63576 14.0707 1.56588 14.1852 1.60411C14.2845 1.6373 14.3625 1.71528 14.3957 1.81465C14.4339 1.92907 14.3641 2.10813 14.2243 2.46625L11.8849 8.4609M10.9238 10.9238L9.83074 13.7247C9.67593 14.1215 9.59852 14.3198 9.48725 14.3776C9.39079 14.4277 9.27596 14.4277 9.17956 14.3774C9.06835 14.3195 8.99118 14.1211 8.83683 13.7242L7.08476 9.21883C7.05342 9.13826 7.03776 9.09798 7.01356 9.06406C6.99212 9.03399 6.96583 9.0077 6.93576 8.98625C6.90184 8.96206 6.86156 8.94639 6.78099 8.91506L2.27566 7.16299C1.87876 7.00864 1.68031 6.93146 1.62237 6.82026C1.57215 6.72386 1.57208 6.60903 1.62219 6.51257C1.68 6.4013 1.87836 6.32389 2.27507 6.16908L5.07834 5.07512M13.9997 14.0001L1.9997 2.00012"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNavigationPointerOff01)
const NavigationPointerOff01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'NavigationPointerOff01', props.className].join(' ')}
    />
  )
})
NavigationPointerOff01.displayName = 'IconNavigationPointerOff01'
export default NavigationPointerOff01
