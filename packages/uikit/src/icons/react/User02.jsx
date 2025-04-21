import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUser02 = (props, ref) => {
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
        d="M7.99998 10C5.8866 10 4.00718 11.0204 2.81064 12.604C2.55312 12.9448 2.42436 13.1152 2.42857 13.3455C2.43182 13.5235 2.54356 13.7479 2.68356 13.8578C2.86477 14 3.11589 14 3.61814 14H12.3818C12.8841 14 13.1352 14 13.3164 13.8578C13.4564 13.7479 13.5681 13.5235 13.5714 13.3455C13.5756 13.1152 13.4468 12.9448 13.1893 12.604C11.9928 11.0204 10.1134 10 7.99998 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M7.99998 8C9.65684 8 11 6.65685 11 5C11 3.34315 9.65684 2 7.99998 2C6.34313 2 4.99998 3.34315 4.99998 5C4.99998 6.65685 6.34313 8 7.99998 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUser02)
const User02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'User02', props.className].join(' ')}
    />
  )
})
User02.displayName = 'IconUser02'
export default User02
