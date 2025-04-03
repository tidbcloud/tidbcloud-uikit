import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency04 = (props, ref) => {
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
        d="M1.3335 1.3335L2.66683 2.66683M14.6668 1.3335L13.3335 2.66683M14.6668 14.6668L13.3335 13.3335M1.3335 14.6668L2.66683 13.3335M1.3335 10.6668H2.3335M5.3335 1.3335V2.3335M14.6668 5.3335H13.6668M10.6668 14.6668V13.6668M12.0002 10.6668H14.3335M10.6668 1.3335V4.00016M1.3335 5.3335H4.00016M5.3335 14.6668V12.0002M7.62304 5.04395L5.04395 7.62304C4.91195 7.75504 4.84594 7.82105 4.82122 7.89716C4.79946 7.96411 4.79946 8.03622 4.82122 8.10317C4.84594 8.17928 4.91195 8.24528 5.04395 8.37729L7.62304 10.9564C7.75504 11.0884 7.82105 11.1544 7.89716 11.1791C7.96411 11.2009 8.03622 11.2009 8.10317 11.1791C8.17928 11.1544 8.24528 11.0884 8.37729 10.9564L10.9564 8.37729C11.0884 8.24528 11.1544 8.17928 11.1791 8.10317C11.2009 8.03622 11.2009 7.96411 11.1791 7.89716C11.1544 7.82105 11.0884 7.75505 10.9564 7.62304L8.37729 5.04395C8.24528 4.91195 8.17928 4.84594 8.10317 4.82122C8.03622 4.79946 7.96411 4.79946 7.89716 4.82122C7.82105 4.84594 7.75505 4.91195 7.62304 5.04395Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency04)
const Cryptocurrency04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cryptocurrency04', props.className].join(' ')}
    />
  )
})
Cryptocurrency04.displayName = 'IconCryptocurrency04'
export default Cryptocurrency04
