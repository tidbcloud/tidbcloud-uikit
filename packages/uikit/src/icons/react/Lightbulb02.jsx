import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightbulb02 = (props, ref) => {
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
        d="M6.66659 11.7723V13.3333C6.66659 14.0696 7.26354 14.6666 7.99992 14.6666C8.7363 14.6666 9.33325 14.0696 9.33325 13.3333V11.7723M7.99992 1.33325V1.99992M1.99992 7.99992H1.33325M3.66659 3.66659L3.26652 3.26652M12.3333 3.66659L12.7334 3.26652M14.6666 7.99992H13.9999M11.9999 7.99992C11.9999 10.2091 10.2091 11.9999 7.99992 11.9999C5.79078 11.9999 3.99992 10.2091 3.99992 7.99992C3.99992 5.79078 5.79078 3.99992 7.99992 3.99992C10.2091 3.99992 11.9999 5.79078 11.9999 7.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightbulb02)
const Lightbulb02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightbulb02', props.className].join(' ')}
    />
  )
})
Lightbulb02.displayName = 'IconLightbulb02'
export default Lightbulb02
