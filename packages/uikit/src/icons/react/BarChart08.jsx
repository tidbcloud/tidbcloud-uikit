import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarChart08 = (props, ref) => {
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
        d="M14 14H4.13333C3.3866 14 3.01323 14 2.72801 13.8547C2.47713 13.7268 2.27316 13.5229 2.14532 13.272C2 12.9868 2 12.6134 2 11.8667V2M4.66667 9.66667V11.6667M7.66667 7.66667V11.6667M10.6667 5.66667V11.6667M13.6667 3.66667V11.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarChart08)
const BarChart08 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarChart08', props.className].join(' ')}
    />
  )
})
BarChart08.displayName = 'IconBarChart08'
export default BarChart08
