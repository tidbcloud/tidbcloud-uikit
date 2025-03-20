import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunrise = (props, ref) => {
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
        d="M4 18H2m4.314-5.686L4.9 10.9m12.786 1.414L19.1 10.9M22 18h-2M7 18a5 5 0 0 1 10 0m5 4H2M16 6l-4-4m0 0L8 6m4-4v7"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunrise)
const Sunrise = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Sunrise'].join(' ')}
    />
  )
})
Sunrise.displayName = 'IconSunrise'
export default Sunrise
