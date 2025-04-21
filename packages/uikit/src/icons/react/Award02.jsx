import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAward02 = (props, ref) => {
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
        d="M4.66667 10.0603V14.6668L7.80192 13.4127C7.8751 13.3835 7.91169 13.3688 7.94946 13.363C7.98296 13.3579 8.01704 13.3579 8.05054 13.363C8.08831 13.3688 8.1249 13.3835 8.19808 13.4127L11.3333 14.6668V10.0603M13 6.3335C13 9.09492 10.7614 11.3335 8 11.3335C5.23858 11.3335 3 9.09492 3 6.3335C3 3.57207 5.23858 1.3335 8 1.3335C10.7614 1.3335 13 3.57207 13 6.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAward02)
const Award02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Award02', props.className].join(' ')}
    />
  )
})
Award02.displayName = 'IconAward02'
export default Award02
