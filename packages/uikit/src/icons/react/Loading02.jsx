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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M7.99998 1.33334V4.00001M7.99998 12V14.6667M3.99998 8.00001H1.33331M14.6666 8.00001H12M12.7189 12.719L10.8333 10.8333M12.7189 3.3333L10.8333 5.21892M3.28103 12.719L5.16665 10.8333M3.28103 3.3333L5.16665 5.21892"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
