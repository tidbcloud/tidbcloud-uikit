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
      ref={ref}
      {...props}
    >
      <path
        d="M9.4074 4.48128H13.4269C13.7251 4.48128 13.8742 4.48128 13.9614 4.54398C14.0375 4.59868 14.087 4.68288 14.0979 4.77595C14.1104 4.88262 14.038 5.01295 13.8931 5.27363L12.9134 7.03709C12.8609 7.13162 12.8347 7.17889 12.8244 7.22895C12.8152 7.27325 12.8152 7.31894 12.8244 7.36325C12.8347 7.4133 12.8609 7.46057 12.9134 7.55511L13.8931 9.31857C14.038 9.57924 14.1104 9.70958 14.0979 9.81625C14.087 9.90932 14.0375 9.99352 13.9614 10.0482C13.8742 10.1109 13.7251 10.1109 13.4269 10.1109H8.36296C7.98959 10.1109 7.8029 10.1109 7.6603 10.0382C7.53485 9.97433 7.43287 9.87235 7.36895 9.74691C7.29629 9.6043 7.29629 9.41761 7.29629 9.04424V7.2961M4.83333 14.3333L2.01852 3.07406M3.0741 7.29613H8.34074C8.71411 7.29613 8.90079 7.29613 9.0434 7.22347C9.16884 7.15956 9.27083 7.05757 9.33474 6.93213C9.4074 6.78952 9.4074 6.60284 9.4074 6.22947V2.73317C9.4074 2.3598 9.4074 2.17312 9.33474 2.03051C9.27083 1.90507 9.16884 1.80308 9.0434 1.73917C8.90079 1.6665 8.71411 1.6665 8.34074 1.6665H3.03281C2.56713 1.6665 2.33429 1.6665 2.17504 1.76299C2.03546 1.84756 1.93175 1.98039 1.88356 2.13632C1.82858 2.31422 1.88505 2.54011 1.998 2.99188L3.0741 7.29613Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
