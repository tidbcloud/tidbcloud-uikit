import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTrendDown01 = (props, ref) => {
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
        d="M14.6663 11.3334L9.42059 6.0876C9.15658 5.82359 9.02457 5.69158 8.87235 5.64212C8.73846 5.59862 8.59423 5.59862 8.46033 5.64212C8.30811 5.69158 8.17611 5.82359 7.91209 6.0876L6.08725 7.91244C5.82324 8.17645 5.69124 8.30846 5.53902 8.35792C5.40512 8.40142 5.26089 8.40142 5.127 8.35792C4.97478 8.30846 4.84277 8.17645 4.57876 7.91244L1.33301 4.66669M14.6663 11.3334H9.99967M14.6663 11.3334V6.66669"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTrendDown01)
const TrendDown01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TrendDown01', props.className].join(' ')}
    />
  )
})
TrendDown01.displayName = 'IconTrendDown01'
export default TrendDown01
