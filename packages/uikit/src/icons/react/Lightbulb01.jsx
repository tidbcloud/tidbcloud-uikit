import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightbulb01 = (props, ref) => {
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
        d="M10 10.9999V12.6666C10 13.2878 10 13.5985 9.89851 13.8435C9.76318 14.1702 9.50362 14.4298 9.17691 14.5651C8.93188 14.6666 8.62126 14.6666 8 14.6666C7.37874 14.6666 7.06812 14.6666 6.82309 14.5651C6.49638 14.4298 6.23682 14.1702 6.10149 13.8435C6 13.5985 6 13.2878 6 12.6666V10.9999M10 10.9999C11.7659 10.2284 13 8.38357 13 6.33325C13 3.57183 10.7614 1.33325 8 1.33325C5.23858 1.33325 3 3.57183 3 6.33325C3 8.38357 4.2341 10.2284 6 10.9999M10 10.9999H6"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightbulb01)
const Lightbulb01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightbulb01', props.className].join(' ')}
    />
  )
})
Lightbulb01.displayName = 'IconLightbulb01'
export default Lightbulb01
