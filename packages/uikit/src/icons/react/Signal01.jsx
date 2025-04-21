import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSignal01 = (props, ref) => {
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
        d="M10.8283 5.17151C12.3904 6.7336 12.3904 9.26626 10.8283 10.8284M5.17149 10.8283C3.60939 9.26624 3.60939 6.73358 5.17149 5.17148M3.28587 12.714C0.682378 10.1105 0.682378 5.88938 3.28587 3.28589M12.714 3.28592C15.3175 5.88941 15.3175 10.1105 12.714 12.714M9.33325 7.99993C9.33325 8.73631 8.7363 9.33327 7.99992 9.33327C7.26354 9.33327 6.66659 8.73631 6.66659 7.99993C6.66659 7.26355 7.26354 6.6666 7.99992 6.6666C8.7363 6.6666 9.33325 7.26355 9.33325 7.99993Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSignal01)
const Signal01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Signal01', props.className].join(' ')}
    />
  )
})
Signal01.displayName = 'IconSignal01'
export default Signal01
