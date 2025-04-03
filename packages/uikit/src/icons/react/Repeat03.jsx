import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRepeat03 = (props, ref) => {
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
        d="M8.66683 14.6666L6.66683 12.6666M6.66683 12.6666L8.66683 10.6666M6.66683 12.6666H10.0002C12.5775 12.6666 14.6668 10.5772 14.6668 7.99992C14.6668 6.13832 13.5768 4.53132 12.0002 3.78234M4.00016 12.2175C2.42353 11.4685 1.3335 9.86152 1.3335 7.99992C1.3335 5.42259 3.42283 3.33325 6.00016 3.33325H9.3335M9.3335 3.33325L7.3335 1.33325M9.3335 3.33325L7.3335 5.33325"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRepeat03)
const Repeat03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Repeat03', props.className].join(' ')}
    />
  )
})
Repeat03.displayName = 'IconRepeat03'
export default Repeat03
