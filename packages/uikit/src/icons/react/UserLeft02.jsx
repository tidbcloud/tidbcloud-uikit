import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUserLeft02 = (props, ref) => {
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
        d="M12.6668 6L10.6668 4M10.6668 4L12.6668 2M10.6668 4L14.6668 4M10.6668 14V13.2C10.6668 12.0799 10.6668 11.5198 10.4488 11.092C10.2571 10.7157 9.95113 10.4097 9.57481 10.218C9.14699 10 8.58693 10 7.46683 10H4.5335C3.41339 10 2.85334 10 2.42552 10.218C2.04919 10.4097 1.74323 10.7157 1.55148 11.092C1.3335 11.5198 1.3335 12.0799 1.3335 13.2V14M8.3335 5C8.3335 6.28866 7.28883 7.33333 6.00016 7.33333C4.7115 7.33333 3.66683 6.28866 3.66683 5C3.66683 3.71134 4.7115 2.66667 6.00016 2.66667C7.28883 2.66667 8.3335 3.71134 8.3335 5Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUserLeft02)
const UserLeft02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UserLeft02', props.className].join(' ')}
    />
  )
})
UserLeft02.displayName = 'IconUserLeft02'
export default UserLeft02
