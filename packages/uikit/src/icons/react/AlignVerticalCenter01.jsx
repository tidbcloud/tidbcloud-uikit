import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignVerticalCenter01 = (props, ref) => {
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
        d="M2 7.99992H14M8 1.33325V5.66659M8 5.66659L10.6667 2.99992M8 5.66659L5.33333 2.99992M8 14.6666V10.3333M8 10.3333L10.6667 12.9999M8 10.3333L5.33333 12.9999"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignVerticalCenter01)
const AlignVerticalCenter01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlignVerticalCenter01', props.className].join(' ')}
    />
  )
})
AlignVerticalCenter01.displayName = 'IconAlignVerticalCenter01'
export default AlignVerticalCenter01
