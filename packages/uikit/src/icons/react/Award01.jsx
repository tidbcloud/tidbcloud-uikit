import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAward01 = (props, ref) => {
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
        d="M5.31104 9.81478L4.66659 14.6668L7.72552 12.8315C7.82529 12.7716 7.87517 12.7417 7.92842 12.73C7.97553 12.7196 8.02431 12.7196 8.07141 12.73C8.12467 12.7417 8.17455 12.7716 8.27432 12.8315L11.3333 14.6668L10.6894 9.81432M12.6666 6.00016C12.6666 8.57749 10.5772 10.6668 7.99992 10.6668C5.42259 10.6668 3.33325 8.57749 3.33325 6.00016C3.33325 3.42283 5.42259 1.3335 7.99992 1.3335C10.5772 1.3335 12.6666 3.42283 12.6666 6.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAward01)
const Award01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Award01', props.className].join(' ')}
    />
  )
})
Award01.displayName = 'IconAward01'
export default Award01
