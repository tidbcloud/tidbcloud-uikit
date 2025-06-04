import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBriefcase02 = (props, ref) => {
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
        d="M5.33325 14V4.66667C5.33325 4.04669 5.33325 3.7367 5.4014 3.48236C5.58633 2.79218 6.12543 2.25308 6.81561 2.06815C7.06995 2 7.37994 2 7.99992 2C8.6199 2 8.92989 2 9.18422 2.06815C9.87441 2.25308 10.4135 2.79218 10.5984 3.48236C10.6666 3.7367 10.6666 4.04669 10.6666 4.66667V14M3.46659 14H12.5333C13.28 14 13.6534 14 13.9386 13.8547C14.1895 13.7268 14.3934 13.5229 14.5213 13.272C14.6666 12.9868 14.6666 12.6134 14.6666 11.8667V6.8C14.6666 6.05326 14.6666 5.6799 14.5213 5.39468C14.3934 5.1438 14.1895 4.93982 13.9386 4.81199C13.6534 4.66667 13.28 4.66667 12.5333 4.66667H3.46659C2.71985 4.66667 2.34648 4.66667 2.06126 4.81199C1.81038 4.93982 1.60641 5.1438 1.47858 5.39468C1.33325 5.6799 1.33325 6.05326 1.33325 6.8V11.8667C1.33325 12.6134 1.33325 12.9868 1.47858 13.272C1.60641 13.5229 1.81038 13.7268 2.06126 13.8547C2.34648 14 2.71985 14 3.46659 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBriefcase02)
const Briefcase02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Briefcase02', props.className].join(' ')}
    />
  )
})
Briefcase02.displayName = 'IconBriefcase02'
export default Briefcase02
