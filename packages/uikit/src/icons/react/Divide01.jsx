import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDivide01 = (props, ref) => {
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
        d="M2.6665 7.99992H13.3332M8.6665 3.99992C8.6665 4.36811 8.36803 4.66659 7.99984 4.66659C7.63165 4.66659 7.33317 4.36811 7.33317 3.99992C7.33317 3.63173 7.63165 3.33325 7.99984 3.33325C8.36803 3.33325 8.6665 3.63173 8.6665 3.99992ZM8.6665 11.9999C8.6665 12.3681 8.36803 12.6666 7.99984 12.6666C7.63165 12.6666 7.33317 12.3681 7.33317 11.9999C7.33317 11.6317 7.63165 11.3333 7.99984 11.3333C8.36803 11.3333 8.6665 11.6317 8.6665 11.9999Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDivide01)
const Divide01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Divide01', props.className].join(' ')}
    />
  )
})
Divide01.displayName = 'IconDivide01'
export default Divide01
