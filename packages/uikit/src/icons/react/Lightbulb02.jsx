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
      ref={ref}
      {...props}
    >
      <path
        d="M6.66683 11.7723V13.3333C6.66683 14.0696 7.26378 14.6666 8.00016 14.6666C8.73654 14.6666 9.3335 14.0696 9.3335 13.3333V11.7723M8.00016 1.33325V1.99992M2.00016 7.99992H1.3335M3.66683 3.66659L3.26676 3.26652M12.3335 3.66659L12.7337 3.26652M14.6668 7.99992H14.0002M12.0002 7.99992C12.0002 10.2091 10.2093 11.9999 8.00016 11.9999C5.79102 11.9999 4.00016 10.2091 4.00016 7.99992C4.00016 5.79078 5.79102 3.99992 8.00016 3.99992C10.2093 3.99992 12.0002 5.79078 12.0002 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
