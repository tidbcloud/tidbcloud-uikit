import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconColon = (props, ref) => {
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
        d="M8.0007 5.70382C8.36889 5.70382 8.66736 5.40534 8.66736 5.03715C8.66736 4.66896 8.36889 4.37048 8.0007 4.37048C7.63251 4.37048 7.33403 4.66896 7.33403 5.03715C7.33403 5.40534 7.63251 5.70382 8.0007 5.70382Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M8.00016 11.6295C8.36835 11.6295 8.66683 11.3311 8.66683 10.9629C8.66683 10.5947 8.36835 10.2962 8.00016 10.2962C7.63197 10.2962 7.3335 10.5947 7.3335 10.9629C7.3335 11.3311 7.63197 11.6295 8.00016 11.6295Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconColon)
const Colon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Colon', props.className].join(' ')}
    />
  )
})
Colon.displayName = 'IconColon'
export default Colon
