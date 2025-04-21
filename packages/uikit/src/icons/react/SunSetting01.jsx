import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunSetting01 = (props, ref) => {
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
        d="M8.00004 2V3.33333M3.54278 4.87608L2.59998 3.93327M12.4572 4.87608L13.4 3.93327M4.00004 10C4.00004 7.79086 5.7909 6 8.00004 6C10.2092 6 12 7.79086 12 10M14.6667 10H1.33337M12.6667 12.6667H3.33337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunSetting01)
const SunSetting01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SunSetting01', props.className].join(' ')}
    />
  )
})
SunSetting01.displayName = 'IconSunSetting01'
export default SunSetting01
