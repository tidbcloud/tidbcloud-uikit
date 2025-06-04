import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRepeat01 = (props, ref) => {
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
        d="M11.3333 1.33325L14 3.99992M14 3.99992L11.3333 6.66659M14 3.99992H5.2C4.0799 3.99992 3.51984 3.99992 3.09202 4.21791C2.71569 4.40965 2.40973 4.71561 2.21799 5.09194C2 5.51976 2 6.07981 2 7.19992V7.33325M2 11.9999H10.8C11.9201 11.9999 12.4802 11.9999 12.908 11.7819C13.2843 11.5902 13.5903 11.2842 13.782 10.9079C14 10.4801 14 9.92002 14 8.79992V8.66659M2 11.9999L4.66667 14.6666M2 11.9999L4.66667 9.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRepeat01)
const Repeat01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Repeat01', props.className].join(' ')}
    />
  )
})
Repeat01.displayName = 'IconRepeat01'
export default Repeat01
