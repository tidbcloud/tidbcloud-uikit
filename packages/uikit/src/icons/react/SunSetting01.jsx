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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 2V3.33333M3.54291 4.87608L2.6001 3.93327M12.4574 4.87608L13.4002 3.93327M4.00016 10C4.00016 7.79086 5.79102 6 8.00016 6C10.2093 6 12.0002 7.79086 12.0002 10M14.6668 10H1.3335M12.6668 12.6667H3.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
