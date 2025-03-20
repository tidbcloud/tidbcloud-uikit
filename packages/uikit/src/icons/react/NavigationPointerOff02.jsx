import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointerOff02 = (props, ref) => {
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
        d="m10.471 5.476.792-1.806c.232-.528.348-.792.51-.872a.5.5 0 0 1 .446 0c.162.08.278.344.51.872l3.172 7.233M8.947 8.952l-4.965 11.32c-.257.585-.385.878-.329 1.057a.5.5 0 0 0 .327.326c.18.056.472-.072 1.056-.33l6.637-2.92c.12-.052.178-.078.24-.088q.082-.015.165 0c.062.01.121.036.24.088l6.637 2.92c.584.258.877.386 1.056.33a.5.5 0 0 0 .327-.326c.056-.18-.072-.472-.328-1.057l-.205-.465M22 22 2 2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNavigationPointerOff02)
const NavigationPointerOff02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'NavigationPointerOff02'].join(' ')}
    />
  )
})
NavigationPointerOff02.displayName = 'IconNavigationPointerOff02'
export default NavigationPointerOff02
