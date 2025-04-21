import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun02 = (props, ref) => {
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
        d="M7.00004 1V2.06667M2.40004 6.66667H1.33337M3.63417 3.30091L2.87992 2.54667M10.3666 3.30091L11.1208 2.54667M12.6667 6.66667H11.6M4.33342 6.66672C4.33342 5.19396 5.52733 4.00005 7.00009 4.00005C8.0041 4.00005 8.87851 4.5549 9.33342 5.37471M4.00004 14.6667C2.52728 14.6667 1.33337 13.4728 1.33337 12C1.33337 10.5272 2.52728 9.33333 4.00004 9.33333C4.3095 9.33333 4.60664 9.38605 4.88299 9.48298C5.36045 8.22637 6.57595 7.33333 8.00004 7.33333C9.42413 7.33333 10.6396 8.22637 11.1171 9.48298C11.3934 9.38605 11.6906 9.33333 12 9.33333C13.4728 9.33333 14.6667 10.5272 14.6667 12C14.6667 13.4728 13.4728 14.6667 12 14.6667C8.90651 14.6667 6.58618 14.6667 4.00004 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSun02)
const CloudSun02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudSun02', props.className].join(' ')}
    />
  )
})
CloudSun02.displayName = 'IconCloudSun02'
export default CloudSun02
