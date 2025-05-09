import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun03 = (props, ref) => {
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
        d="M2.10006 7.3335C2.03447 7.01039 2.00004 6.67596 2.00004 6.3335C2.00004 3.57207 4.23862 1.3335 7.00004 1.3335C9.53543 1.3335 11.6301 3.22059 11.956 5.66683M4.00004 14.6668C2.52728 14.6668 1.33337 13.4729 1.33337 12.0002C1.33337 10.5274 2.52728 9.3335 4.00004 9.3335C4.07559 9.3335 4.15041 9.33664 4.22437 9.3428C4.77085 7.78435 6.25494 6.66683 8.00004 6.66683C9.48326 6.66683 10.7779 7.47411 11.4686 8.67327C11.5341 8.669 11.6002 8.66683 11.6667 8.66683C13.3236 8.66683 14.6667 10.01 14.6667 11.6668C14.6667 13.3237 13.3236 14.6668 11.6667 14.6668C9.17558 14.6668 6.70309 14.6668 4.00004 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSun03)
const CloudSun03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudSun03', props.className].join(' ')}
    />
  )
})
CloudSun03.displayName = 'IconCloudSun03'
export default CloudSun03
