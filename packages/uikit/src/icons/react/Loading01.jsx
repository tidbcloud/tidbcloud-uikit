import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLoading01 = (props, ref) => {
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
        d="M8 1.5V3.16667M8 12V14.6667M3.83333 8H1.5M14.1667 8H13.1667M12.3047 12.3047L11.8333 11.8333M12.4428 3.61052L11.5 4.55333M3.28105 12.719L5.16667 10.8333M3.41912 3.47245L4.83333 4.88667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLoading01)
const Loading01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Loading01', props.className].join(' ')}
    />
  )
})
Loading01.displayName = 'IconLoading01'
export default Loading01
