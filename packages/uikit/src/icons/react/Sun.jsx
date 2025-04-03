import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSun = (props, ref) => {
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
        d="M8.00016 1.3335V2.66683M8.00016 13.3335V14.6668M2.66683 8.00016H1.3335M4.20957 4.20957L3.26676 3.26676M11.7908 4.20957L12.7336 3.26676M4.20957 11.7935L3.26676 12.7363M11.7908 11.7935L12.7336 12.7363M14.6668 8.00016H13.3335M11.3335 8.00016C11.3335 9.84111 9.84111 11.3335 8.00016 11.3335C6.15921 11.3335 4.66683 9.84111 4.66683 8.00016C4.66683 6.15921 6.15921 4.66683 8.00016 4.66683C9.84111 4.66683 11.3335 6.15921 11.3335 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSun)
const Sun = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sun', props.className].join(' ')}
    />
  )
})
Sun.displayName = 'IconSun'
export default Sun
