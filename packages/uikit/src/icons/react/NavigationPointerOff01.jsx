import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointerOff01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.337 6.161 20.3 2.663c.537-.21.806-.314.978-.257a.5.5 0 0 1 .316.316c.057.172-.048.44-.258.977l-3.509 8.992m-1.441 3.695-1.64 4.201c-.232.595-.348.893-.515.98a.5.5 0 0 1-.462 0c-.167-.088-.282-.385-.514-.98l-2.628-6.759a1 1 0 0 0-.107-.232.5.5 0 0 0-.116-.117c-.051-.036-.112-.06-.232-.106l-6.759-2.628c-.595-.232-.893-.348-.98-.515a.5.5 0 0 1 0-.461c.087-.167.385-.283.98-.515l4.204-1.641M21 21 3 3"
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
      className={[props.className, 'tiui-icon', 'NavigationPointerOff01'].join(' ')}
    />
  )
})
NavigationPointerOff01.displayName = 'IconNavigationPointerOff01'
export default NavigationPointerOff01
