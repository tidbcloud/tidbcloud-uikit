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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.99992 10.6666L11.9999 10.6666M3.99992 10.6666C5.47268 10.6666 6.66659 9.47268 6.66659 7.99992C6.66659 6.52716 5.47268 5.33325 3.99992 5.33325C2.52716 5.33325 1.33325 6.52716 1.33325 7.99992C1.33325 9.47268 2.52716 10.6666 3.99992 10.6666ZM11.9999 10.6666C13.4727 10.6666 14.6666 9.47268 14.6666 7.99992C14.6666 6.52716 13.4727 5.33325 11.9999 5.33325C10.5272 5.33325 9.33325 6.52716 9.33325 7.99992C9.33325 9.47268 10.5272 10.6666 11.9999 10.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
