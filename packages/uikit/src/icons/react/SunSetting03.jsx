import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunSetting03 = (props, ref) => {
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
        d="M4.0402 13.9417C4.84687 14.3083 5.87354 14.3083 6.6802 13.9417C7.48687 13.575 8.51354 13.575 9.3202 13.9417C10.1269 14.3083 11.1535 14.3083 11.9602 13.9417M8.00016 2V3.33333M2.66683 8.66667H1.3335M4.20957 4.87608L3.26676 3.93327M11.7905 4.87608L12.7333 3.93327M14.6668 8.66667H13.3335M4.66683 8.66667C4.66683 6.82572 6.15921 5.33333 8.00016 5.33333C9.84111 5.33333 11.3335 6.82572 11.3335 8.66667M1.40023 11.6083C2.20689 11.2417 3.23356 11.2417 4.04023 11.6083C4.84689 11.975 5.87356 11.975 6.68023 11.6083C7.48689 11.2417 8.51356 11.2417 9.32023 11.6083C10.1269 11.975 11.1536 11.975 11.9602 11.6083C12.7669 11.2417 13.7936 11.2417 14.6002 11.6083"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunSetting03)
const SunSetting03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SunSetting03', props.className].join(' ')}
    />
  )
})
SunSetting03.displayName = 'IconSunSetting03'
export default SunSetting03
