import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataflow02 = (props, ref) => {
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
        d="M8 2.66683V10.1335C8 11.2536 8 11.8137 8.21799 12.2415C8.40973 12.6178 8.71569 12.9238 9.09202 13.1155C9.51984 13.3335 10.0799 13.3335 11.2 13.3335H11.3333M11.3333 13.3335C11.3333 14.0699 11.9303 14.6668 12.6667 14.6668C13.403 14.6668 14 14.0699 14 13.3335C14 12.5971 13.403 12.0002 12.6667 12.0002C11.9303 12.0002 11.3333 12.5971 11.3333 13.3335ZM4.66667 2.66683L11.3333 2.66683M4.66667 2.66683C4.66667 3.40321 4.06971 4.00016 3.33333 4.00016C2.59695 4.00016 2 3.40321 2 2.66683C2 1.93045 2.59695 1.3335 3.33333 1.3335C4.06971 1.3335 4.66667 1.93045 4.66667 2.66683ZM11.3333 2.66683C11.3333 3.40321 11.9303 4.00016 12.6667 4.00016C13.403 4.00016 14 3.40321 14 2.66683C14 1.93045 13.403 1.3335 12.6667 1.3335C11.9303 1.3335 11.3333 1.93045 11.3333 2.66683ZM8 8.00016H11.3333M11.3333 8.00016C11.3333 8.73654 11.9303 9.3335 12.6667 9.3335C13.403 9.3335 14 8.73654 14 8.00016C14 7.26378 13.403 6.66683 12.6667 6.66683C11.9303 6.66683 11.3333 7.26378 11.3333 8.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataflow02)
const Dataflow02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Dataflow02', props.className].join(' ')}
    />
  )
})
Dataflow02.displayName = 'IconDataflow02'
export default Dataflow02
