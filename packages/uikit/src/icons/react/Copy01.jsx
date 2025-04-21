import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCopy01 = (props, ref) => {
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
        d="M3.33334 10C2.71208 10 2.40145 10 2.15642 9.89855C1.82972 9.76322 1.57016 9.50366 1.43483 9.17695C1.33334 8.93192 1.33334 8.6213 1.33334 8.00004V3.46671C1.33334 2.71997 1.33334 2.3466 1.47866 2.06139C1.60649 1.8105 1.81047 1.60653 2.06135 1.4787C2.34656 1.33337 2.71993 1.33337 3.46667 1.33337H8C8.62126 1.33337 8.93189 1.33337 9.17691 1.43487C9.50362 1.57019 9.76318 1.82976 9.89851 2.15646C10 2.40149 10 2.71212 10 3.33337M8.13334 14.6667H12.5333C13.2801 14.6667 13.6534 14.6667 13.9387 14.5214C14.1895 14.3936 14.3935 14.1896 14.5213 13.9387C14.6667 13.6535 14.6667 13.2801 14.6667 12.5334V8.13337C14.6667 7.38664 14.6667 7.01327 14.5213 6.72805C14.3935 6.47717 14.1895 6.2732 13.9387 6.14537C13.6534 6.00004 13.2801 6.00004 12.5333 6.00004H8.13334C7.3866 6.00004 7.01323 6.00004 6.72802 6.14537C6.47713 6.2732 6.27316 6.47717 6.14533 6.72805C6 7.01327 6 7.38664 6 8.13337V12.5334C6 13.2801 6 13.6535 6.14533 13.9387C6.27316 14.1896 6.47713 14.3936 6.72802 14.5214C7.01323 14.6667 7.3866 14.6667 8.13334 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCopy01)
const Copy01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Copy01', props.className].join(' ')}
    />
  )
})
Copy01.displayName = 'IconCopy01'
export default Copy01
