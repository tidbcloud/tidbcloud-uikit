import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle03Right = (props, ref) => {
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
        d="M1.3335 8C1.3335 5.79086 3.12436 4 5.3335 4H10.6668C12.876 4 14.6668 5.79086 14.6668 8C14.6668 10.2091 12.876 12 10.6668 12H5.3335C3.12436 12 1.3335 10.2091 1.3335 8Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6668 9.66667C11.5873 9.66667 12.3335 8.92047 12.3335 8C12.3335 7.07953 11.5873 6.33333 10.6668 6.33333C9.74636 6.33333 9.00016 7.07953 9.00016 8C9.00016 8.92047 9.74636 9.66667 10.6668 9.66667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle03Right)
const Toggle03Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle03Right', props.className].join(' ')}
    />
  )
})
Toggle03Right.displayName = 'IconToggle03Right'
export default Toggle03Right
