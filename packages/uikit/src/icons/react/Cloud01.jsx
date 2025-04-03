import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloud01 = (props, ref) => {
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
        d="M4.3335 12.6668C2.67664 12.6668 1.3335 11.3237 1.3335 9.66683C1.3335 8.10445 2.52783 6.82102 4.05332 6.67974C4.36537 4.78158 6.01366 3.3335 8.00016 3.3335C9.98667 3.3335 11.635 4.78158 11.947 6.67974C13.4725 6.82102 14.6668 8.10445 14.6668 9.66683C14.6668 11.3237 13.3237 12.6668 11.6668 12.6668C8.74027 12.6668 6.8957 12.6668 4.3335 12.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloud01)
const Cloud01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cloud01', props.className].join(' ')}
    />
  )
})
Cloud01.displayName = 'IconCloud01'
export default Cloud01
