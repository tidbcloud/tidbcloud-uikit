import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMicrophone01 = (props, ref) => {
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
        d="M12.6668 6.66659V7.99992C12.6668 10.5772 10.5775 12.6666 8.00016 12.6666M3.3335 6.66659V7.99992C3.3335 10.5772 5.42283 12.6666 8.00016 12.6666M8.00016 12.6666V14.6666M5.3335 14.6666H10.6668M8.00016 9.99992C6.89559 9.99992 6.00016 9.10449 6.00016 7.99992V3.33325C6.00016 2.22868 6.89559 1.33325 8.00016 1.33325C9.10473 1.33325 10.0002 2.22868 10.0002 3.33325V7.99992C10.0002 9.10449 9.10473 9.99992 8.00016 9.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMicrophone01)
const Microphone01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Microphone01', props.className].join(' ')}
    />
  )
})
Microphone01.displayName = 'IconMicrophone01'
export default Microphone01
