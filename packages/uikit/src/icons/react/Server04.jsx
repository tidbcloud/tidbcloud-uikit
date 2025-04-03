import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer04 = (props, ref) => {
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
        d="M14.6668 6.99984L14.3505 4.46959C14.2265 3.47718 14.1645 2.98097 13.9309 2.60704C13.7252 2.27758 13.4279 2.01518 13.0755 1.85187C12.6755 1.6665 12.1754 1.6665 11.1753 1.6665H4.82507C3.82493 1.6665 3.32486 1.6665 2.92484 1.85187C2.57241 2.01518 2.27517 2.27758 2.0694 2.60704C1.83585 2.98097 1.77383 3.47718 1.64978 4.46959L1.3335 6.99984M3.66683 9.6665H12.3335M3.66683 9.6665C2.37817 9.6665 1.3335 8.62183 1.3335 7.33317C1.3335 6.04451 2.37817 4.99984 3.66683 4.99984H12.3335C13.6222 4.99984 14.6668 6.04451 14.6668 7.33317C14.6668 8.62183 13.6222 9.6665 12.3335 9.6665M3.66683 9.6665C2.37817 9.6665 1.3335 10.7112 1.3335 11.9998C1.3335 13.2885 2.37817 14.3332 3.66683 14.3332H12.3335C13.6222 14.3332 14.6668 13.2885 14.6668 11.9998C14.6668 10.7112 13.6222 9.6665 12.3335 9.6665M4.00016 7.33317H4.00683M4.00016 11.9998H4.00683M8.00016 7.33317H12.0002M8.00016 11.9998H12.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer04)
const Server04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server04', props.className].join(' ')}
    />
  )
})
Server04.displayName = 'IconServer04'
export default Server04
