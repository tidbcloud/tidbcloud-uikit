import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconConnect = (props, ref) => {
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
        d="M10.4303 5.92077L6.1708 10.491M14.3211 3.50226C14.6989 4.75752 13.9875 6.08135 12.7323 6.45911C11.477 6.83687 10.1532 6.12551 9.77542 4.87025C9.39766 3.61498 10.109 2.29116 11.3643 1.9134C12.6195 1.53564 13.9434 2.24699 14.3211 3.50226ZM6.8257 11.5416C7.20346 12.7968 6.4921 14.1207 5.23684 14.4984C3.98157 14.8762 2.65775 14.1648 2.27999 12.9096C1.90222 11.6543 2.61358 10.3305 3.86885 9.95271C5.12411 9.57495 6.44794 10.2863 6.8257 11.5416Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconConnect)
const Connect = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Connect', props.className].join(' ')}
    />
  )
})
Connect.displayName = 'IconConnect'
export default Connect
