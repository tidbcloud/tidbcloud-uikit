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
      ref={ref}
      {...props}
    >
      <path
        d="M4.66683 11.3335L4.99051 12.9519C5.11268 13.5628 5.17377 13.8682 5.33326 14.0967C5.4739 14.2982 5.66747 14.4569 5.89262 14.5552C6.14793 14.6668 6.45943 14.6668 7.08241 14.6668H8.91791C9.5409 14.6668 9.85239 14.6668 10.1077 14.5552C10.3329 14.4569 10.5264 14.2982 10.6671 14.0967C10.8266 13.8682 10.8876 13.5628 11.0098 12.9519L11.3335 11.3335M4.66683 4.66683L4.99051 3.04845C5.11268 2.43756 5.17377 2.13212 5.33326 1.90364C5.4739 1.70217 5.66747 1.54347 5.89262 1.44508C6.14793 1.3335 6.45943 1.3335 7.08241 1.3335H8.91791C9.5409 1.3335 9.85239 1.3335 10.1077 1.44508C10.3329 1.54347 10.5264 1.70217 10.6671 1.90364C10.8266 2.13212 10.8876 2.43756 11.0098 3.04845L11.3335 4.66683M8.00016 6.00016V8.00016L9.00016 9.00016M12.6668 8.00016C12.6668 10.5775 10.5775 12.6668 8.00016 12.6668C5.42283 12.6668 3.3335 10.5775 3.3335 8.00016C3.3335 5.42283 5.42283 3.3335 8.00016 3.3335C10.5775 3.3335 12.6668 5.42283 12.6668 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
