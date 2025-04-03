import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeadphones02 = (props, ref) => {
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
        d="M14.6668 11.3333V8.66667C14.6668 4.98477 11.6821 2 8.00016 2C4.31827 2 1.3335 4.98477 1.3335 8.66667V11.3333M5.00016 14C4.07969 14 3.3335 13.2538 3.3335 12.3333V10.3333C3.3335 9.41286 4.07969 8.66667 5.00016 8.66667C5.92064 8.66667 6.66683 9.41286 6.66683 10.3333V12.3333C6.66683 13.2538 5.92064 14 5.00016 14ZM11.0002 14C10.0797 14 9.3335 13.2538 9.3335 12.3333V10.3333C9.3335 9.41286 10.0797 8.66667 11.0002 8.66667C11.9206 8.66667 12.6668 9.41286 12.6668 10.3333V12.3333C12.6668 13.2538 11.9206 14 11.0002 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeadphones02)
const Headphones02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Headphones02', props.className].join(' ')}
    />
  )
})
Headphones02.displayName = 'IconHeadphones02'
export default Headphones02
