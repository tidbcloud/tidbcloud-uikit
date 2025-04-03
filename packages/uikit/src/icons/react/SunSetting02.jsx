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
      ref={ref}
      {...props}
    >
      <path
        d="M14.6668 11H1.3335M13.3335 13.3333H2.66683M8.00016 2V3.33333M2.66683 8.66667H1.3335M4.20957 4.87608L3.26676 3.93327M11.7905 4.87608L12.7333 3.93327M14.6668 8.66667H13.3335M4.66683 8.66667C4.66683 6.82572 6.15921 5.33333 8.00016 5.33333C9.84111 5.33333 11.3335 6.82572 11.3335 8.66667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
