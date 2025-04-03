import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPercent02 = (props, ref) => {
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
        d="M12.6668 3.33337L3.3335 12.6667M6.00016 4.66671C6.00016 5.40309 5.40321 6.00004 4.66683 6.00004C3.93045 6.00004 3.3335 5.40309 3.3335 4.66671C3.3335 3.93033 3.93045 3.33337 4.66683 3.33337C5.40321 3.33337 6.00016 3.93033 6.00016 4.66671ZM12.6668 11.3334C12.6668 12.0698 12.0699 12.6667 11.3335 12.6667C10.5971 12.6667 10.0002 12.0698 10.0002 11.3334C10.0002 10.597 10.5971 10 11.3335 10C12.0699 10 12.6668 10.597 12.6668 11.3334Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPercent02)
const Percent02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Percent02', props.className].join(' ')}
    />
  )
})
Percent02.displayName = 'IconPercent02'
export default Percent02
