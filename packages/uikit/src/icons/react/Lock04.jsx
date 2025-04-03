import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLock04 = (props, ref) => {
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
        d="M4.73417 6.66667H4.66683V5.33333C4.66683 3.49238 6.15921 2 8.00016 2C9.84111 2 11.3335 3.49238 11.3335 5.33333V6.66667H11.2662M8.00016 9.33333V10.6667M12.6668 10C12.6668 12.5773 10.5775 14.6667 8.00016 14.6667C5.42283 14.6667 3.3335 12.5773 3.3335 10C3.3335 7.42267 5.42283 5.33333 8.00016 5.33333C10.5775 5.33333 12.6668 7.42267 12.6668 10Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLock04)
const Lock04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lock04', props.className].join(' ')}
    />
  )
})
Lock04.displayName = 'IconLock04'
export default Lock04
