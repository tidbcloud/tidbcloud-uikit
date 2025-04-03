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
      ref={ref}
      {...props}
    >
      <path
        d="M13.3332 4.66667H6.6665C4.45736 4.66667 2.6665 6.45753 2.6665 8.66667C2.6665 10.8758 4.45736 12.6667 6.6665 12.6667H13.3332M13.3332 4.66667L10.6665 2M13.3332 4.66667L10.6665 7.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
