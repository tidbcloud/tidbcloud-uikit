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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.04008 13.9417C4.84675 14.3083 5.87341 14.3083 6.68008 13.9417C7.48675 13.575 8.51341 13.575 9.32008 13.9417C10.1267 14.3083 11.1534 14.3083 11.9601 13.9417M8.00004 2V3.33333M2.66671 8.66667H1.33337M4.20945 4.87608L3.26664 3.93327M11.7904 4.87608L12.7332 3.93327M14.6667 8.66667H13.3334M4.66671 8.66667C4.66671 6.82572 6.15909 5.33333 8.00004 5.33333C9.84099 5.33333 11.3334 6.82572 11.3334 8.66667M1.40011 11.6083C2.20677 11.2417 3.23344 11.2417 4.04011 11.6083C4.84677 11.975 5.87344 11.975 6.68011 11.6083C7.48677 11.2417 8.51344 11.2417 9.32011 11.6083C10.1268 11.975 11.1534 11.975 11.9601 11.6083C12.7668 11.2417 13.7934 11.2417 14.6001 11.6083"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
