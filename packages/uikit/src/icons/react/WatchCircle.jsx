import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWatchCircle = (props, ref) => {
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
        d="M4.66659 11.3335L4.99026 12.9519C5.11244 13.5628 5.17353 13.8682 5.33301 14.0967C5.47365 14.2982 5.66723 14.4569 5.89238 14.5552C6.14769 14.6668 6.45918 14.6668 7.08217 14.6668H8.91767C9.54065 14.6668 9.85215 14.6668 10.1075 14.5552C10.3326 14.4569 10.5262 14.2982 10.6668 14.0967C10.8263 13.8682 10.8874 13.5628 11.0096 12.9519L11.3333 11.3335M4.66659 4.66683L4.99026 3.04845C5.11244 2.43756 5.17353 2.13212 5.33301 1.90364C5.47365 1.70217 5.66723 1.54347 5.89238 1.44508C6.14769 1.3335 6.45918 1.3335 7.08217 1.3335H8.91767C9.54065 1.3335 9.85215 1.3335 10.1075 1.44508C10.3326 1.54347 10.5262 1.70217 10.6668 1.90364C10.8263 2.13212 10.8874 2.43756 11.0096 3.04845L11.3333 4.66683M7.99992 6.00016V8.00016L8.99992 9.00016M12.6666 8.00016C12.6666 10.5775 10.5772 12.6668 7.99992 12.6668C5.42259 12.6668 3.33325 10.5775 3.33325 8.00016C3.33325 5.42283 5.42259 3.3335 7.99992 3.3335C10.5772 3.3335 12.6666 5.42283 12.6666 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWatchCircle)
const WatchCircle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'WatchCircle', props.className].join(' ')}
    />
  )
})
WatchCircle.displayName = 'IconWatchCircle'
export default WatchCircle
