import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag05 = (props, ref) => {
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
        d="M9.40743 4.48128H13.4269C13.7251 4.48128 13.8742 4.48128 13.9614 4.54398C14.0375 4.59868 14.0871 4.68288 14.0979 4.77595C14.1104 4.88262 14.038 5.01295 13.8932 5.27363L12.9135 7.03709C12.8609 7.13162 12.8347 7.17889 12.8244 7.22895C12.8153 7.27325 12.8153 7.31894 12.8244 7.36325C12.8347 7.4133 12.8609 7.46057 12.9135 7.55511L13.8932 9.31857C14.038 9.57924 14.1104 9.70958 14.0979 9.81625C14.0871 9.90932 14.0375 9.99352 13.9614 10.0482C13.8742 10.1109 13.7251 10.1109 13.427 10.1109H8.36299C7.98962 10.1109 7.80293 10.1109 7.66033 10.0382C7.53488 9.97433 7.4329 9.87235 7.36898 9.74691C7.29632 9.6043 7.29632 9.41761 7.29632 9.04424V7.2961M4.83336 14.3333L2.01855 3.07406M3.07413 7.29613H8.34077C8.71414 7.29613 8.90082 7.29613 9.04343 7.22347C9.16887 7.15956 9.27086 7.05757 9.33477 6.93213C9.40744 6.78952 9.40743 6.60284 9.40743 6.22947V2.73317C9.40743 2.3598 9.40744 2.17312 9.33477 2.03051C9.27086 1.90507 9.16887 1.80308 9.04343 1.73917C8.90082 1.6665 8.71414 1.6665 8.34077 1.6665H3.03285C2.56716 1.6665 2.33432 1.6665 2.17507 1.76299C2.03549 1.84756 1.93178 1.98039 1.88359 2.13632C1.82861 2.31422 1.88508 2.54011 1.99803 2.99188L3.07413 7.29613Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag05)
const Flag05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag05', props.className].join(' ')}
    />
  )
})
Flag05.displayName = 'IconFlag05'
export default Flag05
