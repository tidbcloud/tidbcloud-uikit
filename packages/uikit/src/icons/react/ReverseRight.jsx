import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReverseRight = (props, ref) => {
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
        d="M13.3334 4.66667H6.66675C4.45761 4.66667 2.66675 6.45753 2.66675 8.66667C2.66675 10.8758 4.45761 12.6667 6.66675 12.6667H13.3334M13.3334 4.66667L10.6667 2M13.3334 4.66667L10.6667 7.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReverseRight)
const ReverseRight = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ReverseRight', props.className].join(' ')}
    />
  )
})
ReverseRight.displayName = 'IconReverseRight'
export default ReverseRight
