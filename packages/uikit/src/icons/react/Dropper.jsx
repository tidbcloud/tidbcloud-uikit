import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDropper = (props, ref) => {
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
        d="M7.00016 4.33337L11.6668 9.00004M1.3335 14.6667C1.3335 14.6667 4.3335 14.3334 6.00016 12.6667L14.0002 4.66671C14.7365 3.93033 14.7365 2.73642 14.0002 2.00004C13.2638 1.26366 12.0699 1.26366 11.3335 2.00004L3.3335 10C1.66683 11.6667 1.3335 14.6667 1.3335 14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDropper)
const Dropper = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Dropper', props.className].join(' ')}
    />
  )
})
Dropper.displayName = 'IconDropper'
export default Dropper
