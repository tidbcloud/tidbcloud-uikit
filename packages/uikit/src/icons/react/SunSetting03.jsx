import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunSetting03 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.06 20.913c1.21.55 2.75.55 3.96 0s2.75-.55 3.96 0 2.75.55 3.96 0M12 3v2m-8 8H2m4.314-5.686L4.9 5.9m12.786 1.414L19.1 5.9M22 13h-2M7 13a5 5 0 0 1 10 0M2.1 17.413c1.21-.55 2.75-.55 3.96 0s2.75.55 3.96 0 2.75-.55 3.96 0 2.75.55 3.96 0 2.75-.55 3.96 0"
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
      className={[props.className, 'tiui-icon', 'SunSetting03'].join(' ')}
    />
  )
})
SunSetting03.displayName = 'IconSunSetting03'
export default SunSetting03
