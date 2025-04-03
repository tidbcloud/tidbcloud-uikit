import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAttachment02 = (props, ref) => {
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
        d="M11.6668 3.50404V11.0002C11.6668 13.0252 10.0252 14.6668 8.00016 14.6668C5.97512 14.6668 4.3335 13.0252 4.3335 11.0002V3.77794C4.3335 2.42791 5.42791 1.3335 6.77794 1.3335C8.12797 1.3335 9.22239 2.42791 9.22239 3.77794V10.964C9.22239 11.639 8.67518 12.1862 8.00016 12.1862C7.32515 12.1862 6.77794 11.639 6.77794 10.964V4.43427"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Attachment02', props.className].join(' ')}
    />
  )
})
Attachment02.displayName = 'IconAttachment02'
export default Attachment02
