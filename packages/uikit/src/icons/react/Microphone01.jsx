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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12.6666 6.66659V7.99992C12.6666 10.5772 10.5772 12.6666 7.99992 12.6666M3.33325 6.66659V7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666M7.99992 12.6666V14.6666M5.33325 14.6666H10.6666M7.99992 9.99992C6.89535 9.99992 5.99992 9.10449 5.99992 7.99992V3.33325C5.99992 2.22868 6.89535 1.33325 7.99992 1.33325C9.10449 1.33325 9.99992 2.22868 9.99992 3.33325V7.99992C9.99992 9.10449 9.10449 9.99992 7.99992 9.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
