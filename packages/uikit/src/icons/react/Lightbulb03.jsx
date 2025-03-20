import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightbulb03 = (props, ref) => {
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
        d="M9.5 22h5m.5-6.674a7 7 0 1 0-6 0V16c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 19 11.068 19 12 19s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 17.398 15 16.932 15 16z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightbulb03)
const Lightbulb03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Lightbulb03'].join(' ')}
    />
  )
})
Lightbulb03.displayName = 'IconLightbulb03'
export default Lightbulb03
