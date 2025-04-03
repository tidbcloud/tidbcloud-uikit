import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLineChart00 = (props, ref) => {
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
        d="M14.6663 4.66663L9.42059 9.91238C9.15658 10.1764 9.02457 10.3084 8.87235 10.3579C8.73846 10.4014 8.59423 10.4014 8.46033 10.3579C8.30811 10.3084 8.17611 10.1764 7.91209 9.91238L6.08725 8.08754C5.82324 7.82353 5.69124 7.69152 5.53902 7.64206C5.40512 7.59856 5.26089 7.59856 5.127 7.64206C4.97478 7.69152 4.84277 7.82353 4.57876 8.08754L1.33301 11.3333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLineChart00)
const LineChart00 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LineChart00', props.className].join(' ')}
    />
  )
})
LineChart00.displayName = 'IconLineChart00'
export default LineChart00
