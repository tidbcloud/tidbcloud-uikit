import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsHorizontal = (props, ref) => {
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
        d="M7.99984 8.66659C8.36803 8.66659 8.6665 8.36811 8.6665 7.99992C8.6665 7.63173 8.36803 7.33325 7.99984 7.33325C7.63165 7.33325 7.33317 7.63173 7.33317 7.99992C7.33317 8.36811 7.63165 8.66659 7.99984 8.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6665 8.66659C13.0347 8.66659 13.3332 8.36811 13.3332 7.99992C13.3332 7.63173 13.0347 7.33325 12.6665 7.33325C12.2983 7.33325 11.9998 7.63173 11.9998 7.99992C11.9998 8.36811 12.2983 8.66659 12.6665 8.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33317 8.66659C3.70136 8.66659 3.99984 8.36811 3.99984 7.99992C3.99984 7.63173 3.70136 7.33325 3.33317 7.33325C2.96498 7.33325 2.6665 7.63173 2.6665 7.99992C2.6665 8.36811 2.96498 8.66659 3.33317 8.66659Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsHorizontal)
const DotsHorizontal = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DotsHorizontal', props.className].join(' ')}
    />
  )
})
DotsHorizontal.displayName = 'IconDotsHorizontal'
export default DotsHorizontal
