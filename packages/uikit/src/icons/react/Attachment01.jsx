import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAttachment01 = (props, ref) => {
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
        d="M14.1015 7.26647L8.09108 13.2769C6.72425 14.6437 4.50817 14.6437 3.14134 13.2769C1.7745 11.91 1.7745 9.69396 3.14134 8.32713L9.15174 2.31672C10.063 1.4055 11.5404 1.40549 12.4516 2.31672C13.3628 3.22794 13.3628 4.70533 12.4516 5.61655L6.67687 11.3913C6.22126 11.8469 5.48257 11.8469 5.02695 11.3913C4.57134 10.9356 4.57134 10.197 5.02695 9.74134L10.0946 4.67374"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAttachment01)
const Attachment01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Attachment01', props.className].join(' ')}
    />
  )
})
Attachment01.displayName = 'IconAttachment01'
export default Attachment01
