import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignHorizontalCentre01 = (props, ref) => {
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
        d="M8 2V14M14.6667 8H10.3333M10.3333 8L13 10.6667M10.3333 8L13 5.33333M1.33334 8H5.66667M5.66667 8L3 10.6667M5.66667 8L3 5.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignHorizontalCentre01)
const AlignHorizontalCentre01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlignHorizontalCentre01', props.className].join(' ')}
    />
  )
})
AlignHorizontalCentre01.displayName = 'IconAlignHorizontalCentre01'
export default AlignHorizontalCentre01
