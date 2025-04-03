import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGamingPad02 = (props, ref) => {
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
        d="M4.00016 8H6.66683M5.3335 6.66667V9.33333M10.0002 8.66667H10.0068M12.0002 7.33333H12.0068M3.46683 12H12.5335C13.2802 12 13.6536 12 13.9388 11.8547C14.1897 11.7268 14.3937 11.5229 14.5215 11.272C14.6668 10.9868 14.6668 10.6134 14.6668 9.86667V6.13333C14.6668 5.3866 14.6668 5.01323 14.5215 4.72801C14.3937 4.47713 14.1897 4.27316 13.9388 4.14532C13.6536 4 13.2802 4 12.5335 4H3.46683C2.72009 4 2.34672 4 2.06151 4.14532C1.81063 4.27316 1.60665 4.47713 1.47882 4.72801C1.3335 5.01323 1.3335 5.3866 1.3335 6.13333V9.86667C1.3335 10.6134 1.3335 10.9868 1.47882 11.272C1.60665 11.5229 1.81063 11.7268 2.06151 11.8547C2.34672 12 2.72009 12 3.46683 12Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGamingPad02)
const GamingPad02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GamingPad02', props.className].join(' ')}
    />
  )
})
GamingPad02.displayName = 'IconGamingPad02'
export default GamingPad02
