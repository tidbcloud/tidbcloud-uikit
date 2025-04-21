import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor02 = (props, ref) => {
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
        d="M13.6704 7.18374C14.0817 7.0238 14.2873 6.94383 14.3451 6.83076C14.3951 6.7328 14.3936 6.61647 14.341 6.51985C14.2803 6.40834 14.0726 6.33379 13.6573 6.1847L3.06419 2.38203C2.7244 2.26005 2.5545 2.19906 2.44343 2.23753C2.34686 2.27097 2.27097 2.34686 2.23753 2.44343C2.19906 2.5545 2.26005 2.7244 2.38203 3.06419L6.18467 13.6573C6.33376 14.0727 6.4083 14.2803 6.51982 14.341C6.61644 14.3936 6.73276 14.3951 6.83072 14.3451C6.9438 14.2874 7.02377 14.0817 7.18371 13.6704L8.91493 9.21873C8.94626 9.13816 8.96193 9.09788 8.98612 9.06396C9.00757 9.03389 9.03386 9.0076 9.06393 8.98616C9.09785 8.96196 9.13813 8.9463 9.21869 8.91496L13.6704 7.18374Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor02)
const Cursor02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cursor02', props.className].join(' ')}
    />
  )
})
Cursor02.displayName = 'IconCursor02'
export default Cursor02
