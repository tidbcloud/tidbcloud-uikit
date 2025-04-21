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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.6666 11.3334L9.42083 6.0876C9.15682 5.82359 9.02482 5.69158 8.8726 5.64212C8.7387 5.59862 8.59447 5.59862 8.46057 5.64212C8.30836 5.69158 8.17635 5.82359 7.91234 6.0876L6.0875 7.91244C5.82349 8.17645 5.69148 8.30846 5.53926 8.35792C5.40537 8.40142 5.26114 8.40142 5.12724 8.35792C4.97502 8.30846 4.84302 8.17645 4.579 7.91244L1.33325 4.66669M14.6666 11.3334H9.99992M14.6666 11.3334V6.66669"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
