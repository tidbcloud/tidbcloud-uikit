import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunSetting02 = (props, ref) => {
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
        d="M14.6667 11H1.33337M13.3334 13.3333H2.66671M8.00004 2V3.33333M2.66671 8.66667H1.33337M4.20945 4.87608L3.26664 3.93327M11.7904 4.87608L12.7332 3.93327M14.6667 8.66667H13.3334M4.66671 8.66667C4.66671 6.82572 6.15909 5.33333 8.00004 5.33333C9.84099 5.33333 11.3334 6.82572 11.3334 8.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunSetting02)
const SunSetting02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SunSetting02', props.className].join(' ')}
    />
  )
})
SunSetting02.displayName = 'IconSunSetting02'
export default SunSetting02
