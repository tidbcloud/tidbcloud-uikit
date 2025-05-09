import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDrop = (props, ref) => {
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
        d="M13.3334 9.3335C13.3334 12.279 10.9456 14.6668 8.00008 14.6668C5.05456 14.6668 2.66675 12.279 2.66675 9.3335C2.66675 8.62623 2.80442 7.95112 3.05443 7.3335C3.84561 5.37894 8.00008 1.3335 8.00008 1.3335C8.00008 1.3335 12.1546 5.37894 12.9457 7.3335C13.1957 7.95112 13.3334 8.62623 13.3334 9.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDrop)
const Drop = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Drop', props.className].join(' ')}
    />
  )
})
Drop.displayName = 'IconDrop'
export default Drop
