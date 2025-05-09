import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloud03 = (props, ref) => {
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
        d="M6.33337 12.6665C3.57195 12.6665 1.33337 10.4279 1.33337 7.6665C1.33337 4.90508 3.57195 2.6665 6.33337 2.6665C8.25517 2.6665 9.92373 3.75073 10.7607 5.34086C10.8398 5.33576 10.9196 5.33317 11 5.33317C13.0251 5.33317 14.6667 6.97479 14.6667 8.99984C14.6667 11.0249 13.0251 12.6665 11 12.6665C9.29903 12.6665 8.08162 12.6665 6.33337 12.6665Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloud03)
const Cloud03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cloud03', props.className].join(' ')}
    />
  )
})
Cloud03.displayName = 'IconCloud03'
export default Cloud03
