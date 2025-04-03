import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloud03 = (props, ref) => {
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
        d="M6.3335 12.6665C3.57207 12.6665 1.3335 10.4279 1.3335 7.6665C1.3335 4.90508 3.57207 2.6665 6.3335 2.6665C8.25529 2.6665 9.92385 3.75073 10.7609 5.34086C10.84 5.33576 10.9198 5.33317 11.0002 5.33317C13.0252 5.33317 14.6668 6.97479 14.6668 8.99984C14.6668 11.0249 13.0252 12.6665 11.0002 12.6665C9.29916 12.6665 8.08174 12.6665 6.3335 12.6665Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloud03)
const Cloud03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cloud03', props.className].join(' ')}
    />
  )
})
Cloud03.displayName = 'IconCloud03'
export default Cloud03
