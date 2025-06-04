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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M14.1017 7.26647L8.09133 13.2769C6.72449 14.6437 4.50842 14.6437 3.14158 13.2769C1.77475 11.91 1.77475 9.69396 3.14158 8.32713L9.15199 2.31672C10.0632 1.4055 11.5406 1.40549 12.4518 2.31672C13.363 3.22794 13.363 4.70533 12.4518 5.61655L6.67711 11.3913C6.2215 11.8469 5.48281 11.8469 5.0272 11.3913C4.57159 10.9356 4.57159 10.197 5.0272 9.74134L10.0948 4.67374"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
