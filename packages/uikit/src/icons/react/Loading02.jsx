import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLoading02 = (props, ref) => {
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
        d="M8.00016 1.33331V3.99998M8.00016 12V14.6666M4.00016 7.99998H1.3335M14.6668 7.99998H12.0002M12.7191 12.7189L10.8335 10.8333M12.7191 3.33327L10.8335 5.21889M3.28121 12.7189L5.16683 10.8333M3.28121 3.33327L5.16683 5.21889"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLoading02)
const Loading02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Loading02', props.className].join(' ')}
    />
  )
})
Loading02.displayName = 'IconLoading02'
export default Loading02
