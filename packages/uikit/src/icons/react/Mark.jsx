import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMark = (props, ref) => {
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
        d="M13.3333 8.00016C13.3333 10.9457 10.9455 13.3335 8.00001 13.3335M13.3333 8.00016C13.3333 5.05464 10.9455 2.66683 8.00001 2.66683M13.3333 8.00016H14.6667M8.00001 13.3335C5.05449 13.3335 2.66668 10.9457 2.66668 8.00016M8.00001 13.3335V14.6668M2.66668 8.00016C2.66668 5.05464 5.05449 2.66683 8.00001 2.66683M2.66668 8.00016H1.33334M8.00001 2.66683V1.3335M10 8.00016C10 9.10473 9.10458 10.0002 8.00001 10.0002C6.89544 10.0002 6.00001 9.10473 6.00001 8.00016C6.00001 6.89559 6.89544 6.00016 8.00001 6.00016C9.10458 6.00016 10 6.89559 10 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMark)
const Mark = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Mark', props.className].join(' ')}
    />
  )
})
Mark.displayName = 'IconMark'
export default Mark
