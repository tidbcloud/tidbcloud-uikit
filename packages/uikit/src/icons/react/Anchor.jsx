import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnchor = (props, ref) => {
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
        d="M8 5.33334C9.10457 5.33334 10 4.43791 10 3.33334C10 2.22877 9.10457 1.33334 8 1.33334C6.89543 1.33334 6 2.22877 6 3.33334C6 4.43791 6.89543 5.33334 8 5.33334ZM8 5.33334V14.6667M8 14.6667C6.23189 14.6667 4.5362 13.9643 3.28596 12.7141C2.03571 11.4638 1.33334 9.76812 1.33334 8.00001H3.33334M8 14.6667C9.76811 14.6667 11.4638 13.9643 12.714 12.7141C13.9643 11.4638 14.6667 9.76812 14.6667 8.00001H12.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnchor)
const Anchor = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Anchor', props.className].join(' ')}
    />
  )
})
Anchor.displayName = 'IconAnchor'
export default Anchor
