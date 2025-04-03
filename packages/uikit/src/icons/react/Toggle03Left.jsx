import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle03Left = (props, ref) => {
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
        d="M5.3335 9.66667C6.25397 9.66667 7.00016 8.92047 7.00016 8C7.00016 7.07953 6.25397 6.33333 5.3335 6.33333C4.41302 6.33333 3.66683 7.07953 3.66683 8C3.66683 8.92047 4.41302 9.66667 5.3335 9.66667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle03Left)
const Toggle03Left = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle03Left', props.className].join(' ')}
    />
  )
})
Toggle03Left.displayName = 'IconToggle03Left'
export default Toggle03Left
