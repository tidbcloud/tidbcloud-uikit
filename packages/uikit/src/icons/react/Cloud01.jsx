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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.33337 12.6668C2.67652 12.6668 1.33337 11.3237 1.33337 9.66683C1.33337 8.10445 2.52771 6.82102 4.0532 6.67974C4.36525 4.78158 6.01354 3.3335 8.00004 3.3335C9.98655 3.3335 11.6348 4.78158 11.9469 6.67974C13.4724 6.82102 14.6667 8.10445 14.6667 9.66683C14.6667 11.3237 13.3236 12.6668 11.6667 12.6668C8.74015 12.6668 6.89557 12.6668 4.33337 12.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
