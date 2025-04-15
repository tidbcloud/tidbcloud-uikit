import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSafe = (props, ref) => {
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
        d="M4 14H6M10 14H12M11.6667 4.33333V9.66667M2 4.13333L2 9.86667C2 10.6134 2 10.9868 2.14532 11.272C2.27316 11.5229 2.47713 11.7268 2.72801 11.8547C3.01323 12 3.3866 12 4.13333 12L11.8667 12C12.6134 12 12.9868 12 13.272 11.8547C13.5229 11.7268 13.7268 11.5229 13.8547 11.272C14 10.9868 14 10.6134 14 9.86667V4.13333C14 3.3866 14 3.01323 13.8547 2.72801C13.7268 2.47713 13.5229 2.27316 13.272 2.14533C12.9868 2 12.6134 2 11.8667 2L4.13333 2C3.3866 2 3.01323 2 2.72801 2.14532C2.47713 2.27316 2.27316 2.47713 2.14532 2.72801C2 3.01323 2 3.3866 2 4.13333ZM7.66667 7C7.66667 7.92047 6.92047 8.66667 6 8.66667C5.07953 8.66667 4.33333 7.92047 4.33333 7C4.33333 6.07953 5.07953 5.33333 6 5.33333C6.92047 5.33333 7.66667 6.07953 7.66667 7Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSafe)
const Safe = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Safe', props.className].join(' ')}
    />
  )
})
Safe.displayName = 'IconSafe'
export default Safe
