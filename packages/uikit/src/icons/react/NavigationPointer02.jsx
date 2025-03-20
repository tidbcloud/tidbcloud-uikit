import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointer02 = (props, ref) => {
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
        d="M5.037 21.325c-.585.258-.877.386-1.057.33a.5.5 0 0 1-.326-.327c-.057-.179.071-.471.328-1.056L11.263 3.67c.232-.528.348-.792.51-.873a.5.5 0 0 1 .446 0c.162.081.278.345.51.873l7.281 16.602c.257.585.385.877.328 1.056a.5.5 0 0 1-.326.327c-.18.056-.472-.072-1.057-.33l-6.637-2.92c-.118-.052-.178-.078-.24-.089a.5.5 0 0 0-.164 0c-.062.01-.121.037-.24.089z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNavigationPointer02)
const NavigationPointer02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'NavigationPointer02'].join(' ')}
    />
  )
})
NavigationPointer02.displayName = 'IconNavigationPointer02'
export default NavigationPointer02
