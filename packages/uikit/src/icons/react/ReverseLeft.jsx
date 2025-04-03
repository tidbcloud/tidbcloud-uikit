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
      ref={ref}
      {...props}
    >
      <path
        d="M2.6665 4.66667H9.33317C11.5423 4.66667 13.3332 6.45753 13.3332 8.66667C13.3332 10.8758 11.5423 12.6667 9.33317 12.6667H2.6665M2.6665 4.66667L5.33317 2M2.6665 4.66667L5.33317 7.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
