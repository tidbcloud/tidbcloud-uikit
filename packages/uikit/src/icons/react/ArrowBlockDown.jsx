import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArrowBlockDown = (props, ref) => {
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
        d="M6.00016 2.53333C6.00016 2.34665 6.00016 2.25331 6.03649 2.182C6.06845 2.11928 6.11945 2.06829 6.18217 2.03633C6.25347 2 6.34681 2 6.5335 2H9.46683C9.65351 2 9.74686 2 9.81816 2.03633C9.88088 2.06829 9.93187 2.11928 9.96383 2.182C10.0002 2.25331 10.0002 2.34665 10.0002 2.53333V9.33333H12.6668L8.00016 14L3.3335 9.33333H6.00016V2.53333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowBlockDown)
const ArrowBlockDown = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ArrowBlockDown', props.className].join(' ')}
    />
  )
})
ArrowBlockDown.displayName = 'IconArrowBlockDown'
export default ArrowBlockDown
