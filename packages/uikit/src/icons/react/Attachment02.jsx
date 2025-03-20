import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAttachment02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 5.256V16.5a5.5 5.5 0 1 1-11 0V5.667a3.667 3.667 0 0 1 7.333 0v10.779a1.833 1.833 0 1 1-3.666 0V6.65"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAttachment02)
const Attachment02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Attachment02'].join(' ')}
    />
  )
})
Attachment02.displayName = 'IconAttachment02'
export default Attachment02
