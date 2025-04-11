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
      ref={ref}
      {...props}
    >
      <path
        d="M5.31128 9.81478L4.66683 14.6668L7.72577 12.8315C7.82553 12.7716 7.87542 12.7417 7.92867 12.73C7.97577 12.7196 8.02456 12.7196 8.07166 12.73C8.12491 12.7417 8.17479 12.7716 8.27456 12.8315L11.3335 14.6668L10.6897 9.81432M12.6668 6.00016C12.6668 8.57749 10.5775 10.6668 8.00016 10.6668C5.42283 10.6668 3.3335 8.57749 3.3335 6.00016C3.3335 3.42283 5.42283 1.3335 8.00016 1.3335C10.5775 1.3335 12.6668 3.42283 12.6668 6.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
