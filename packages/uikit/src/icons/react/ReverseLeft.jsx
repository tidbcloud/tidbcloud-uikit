import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReverseLeft = (props, ref) => {
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
        d="M2.66675 4.66667H9.33341C11.5426 4.66667 13.3334 6.45753 13.3334 8.66667C13.3334 10.8758 11.5426 12.6667 9.33341 12.6667H2.66675M2.66675 4.66667L5.33341 2M2.66675 4.66667L5.33341 7.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReverseLeft)
const ReverseLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ReverseLeft', props.className].join(' ')}
    />
  )
})
ReverseLeft.displayName = 'IconReverseLeft'
export default ReverseLeft
