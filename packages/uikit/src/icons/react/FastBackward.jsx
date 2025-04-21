import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFastBackward = (props, ref) => {
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
        d="M14.6665 10.9581C14.6665 11.7114 14.6665 12.0881 14.5143 12.2728C14.3821 12.4332 14.1826 12.5228 13.9749 12.515C13.7357 12.5061 13.4542 12.2558 12.8911 11.7553L9.56335 8.79729C9.25315 8.52157 9.09806 8.3837 9.0409 8.22091C8.99071 8.07795 8.99071 7.92216 9.0409 7.7792C9.09806 7.61641 9.25315 7.47855 9.56335 7.20282L12.8911 4.24479C13.4542 3.74429 13.7357 3.49404 13.9749 3.48509C14.1826 3.47731 14.3821 3.56689 14.5143 3.72732C14.6665 3.91199 14.6665 4.28867 14.6665 5.04202V10.9581Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M7.33312 10.9581C7.33312 11.7114 7.33312 12.0881 7.18095 12.2728C7.04874 12.4332 6.84926 12.5228 6.64152 12.515C6.4024 12.5061 6.12086 12.2558 5.5578 11.7553L2.23001 8.79729C1.91982 8.52157 1.76472 8.3837 1.70757 8.22091C1.65737 8.07795 1.65737 7.92216 1.70757 7.7792C1.76472 7.61641 1.91982 7.47855 2.23001 7.20282L5.5578 4.24479C6.12086 3.74429 6.4024 3.49404 6.64152 3.48509C6.84926 3.47731 7.04874 3.56689 7.18095 3.72732C7.33312 3.91199 7.33312 4.28867 7.33312 5.04202V10.9581Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFastBackward)
const FastBackward = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FastBackward', props.className].join(' ')}
    />
  )
})
FastBackward.displayName = 'IconFastBackward'
export default FastBackward
