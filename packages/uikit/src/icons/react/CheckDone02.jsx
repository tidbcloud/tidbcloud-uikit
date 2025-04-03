import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckDone02 = (props, ref) => {
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
        d="M10.6668 5.33337V3.46671C10.6668 2.71997 10.6668 2.3466 10.5215 2.06139C10.3937 1.8105 10.1897 1.60653 9.93882 1.4787C9.6536 1.33337 9.28023 1.33337 8.5335 1.33337H3.46683C2.72009 1.33337 2.34672 1.33337 2.06151 1.4787C1.81063 1.60653 1.60665 1.8105 1.47882 2.06139C1.3335 2.3466 1.3335 2.71997 1.3335 3.46671V8.53337C1.3335 9.28011 1.3335 9.65348 1.47882 9.93869C1.60665 10.1896 1.81063 10.3936 2.06151 10.5214C2.34672 10.6667 2.72009 10.6667 3.46683 10.6667H5.3335M8.00016 10L9.3335 11.3334L12.3335 8.33337M7.46683 14.6667H12.5335C13.2802 14.6667 13.6536 14.6667 13.9388 14.5214C14.1897 14.3936 14.3937 14.1896 14.5215 13.9387C14.6668 13.6535 14.6668 13.2801 14.6668 12.5334V7.46671C14.6668 6.71997 14.6668 6.3466 14.5215 6.06139C14.3937 5.8105 14.1897 5.60653 13.9388 5.4787C13.6536 5.33337 13.2802 5.33337 12.5335 5.33337H7.46683C6.72009 5.33337 6.34672 5.33337 6.06151 5.4787C5.81063 5.60653 5.60665 5.8105 5.47882 6.06139C5.3335 6.3466 5.3335 6.71997 5.3335 7.46671V12.5334C5.3335 13.2801 5.3335 13.6535 5.47882 13.9387C5.60665 14.1896 5.81063 14.3936 6.06151 14.5214C6.34672 14.6667 6.72009 14.6667 7.46683 14.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckDone02)
const CheckDone02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CheckDone02', props.className].join(' ')}
    />
  )
})
CheckDone02.displayName = 'IconCheckDone02'
export default CheckDone02
