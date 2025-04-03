import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVoicemail = (props, ref) => {
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
        d="M3.99967 10.6666L11.9997 10.6666M3.99967 10.6666C5.47243 10.6666 6.66634 9.47268 6.66634 7.99992C6.66634 6.52716 5.47243 5.33325 3.99967 5.33325C2.52692 5.33325 1.33301 6.52716 1.33301 7.99992C1.33301 9.47268 2.52692 10.6666 3.99967 10.6666ZM11.9997 10.6666C13.4724 10.6666 14.6663 9.47268 14.6663 7.99992C14.6663 6.52716 13.4724 5.33325 11.9997 5.33325C10.5269 5.33325 9.33301 6.52716 9.33301 7.99992C9.33301 9.47268 10.5269 10.6666 11.9997 10.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVoicemail)
const Voicemail = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Voicemail', props.className].join(' ')}
    />
  )
})
Voicemail.displayName = 'IconVoicemail'
export default Voicemail
