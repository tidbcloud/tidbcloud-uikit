import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotsVertical = (props, ref) => {
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
        d="M8.00016 8.66675C8.36835 8.66675 8.66683 8.36827 8.66683 8.00008C8.66683 7.63189 8.36835 7.33341 8.00016 7.33341C7.63197 7.33341 7.3335 7.63189 7.3335 8.00008C7.3335 8.36827 7.63197 8.66675 8.00016 8.66675Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 4.00008C8.36835 4.00008 8.66683 3.7016 8.66683 3.33341C8.66683 2.96522 8.36835 2.66675 8.00016 2.66675C7.63197 2.66675 7.3335 2.96522 7.3335 3.33341C7.3335 3.7016 7.63197 4.00008 8.00016 4.00008Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 13.3334C8.36835 13.3334 8.66683 13.0349 8.66683 12.6667C8.66683 12.2986 8.36835 12.0001 8.00016 12.0001C7.63197 12.0001 7.3335 12.2986 7.3335 12.6667C7.3335 13.0349 7.63197 13.3334 8.00016 13.3334Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotsVertical)
const DotsVertical = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DotsVertical', props.className].join(' ')}
    />
  )
})
DotsVertical.displayName = 'IconDotsVertical'
export default DotsVertical
