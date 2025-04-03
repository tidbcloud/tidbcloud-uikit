import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSwitchHorizontal02 = (props, ref) => {
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
        d="M2.6665 11.3333H13.3332M13.3332 11.3333L10.6665 8.66667M13.3332 11.3333L10.6665 14M13.3332 4.66667H2.6665M2.6665 4.66667L5.33317 2M2.6665 4.66667L5.33317 7.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSwitchHorizontal02)
const SwitchHorizontal02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SwitchHorizontal02', props.className].join(' ')}
    />
  )
})
SwitchHorizontal02.displayName = 'IconSwitchHorizontal02'
export default SwitchHorizontal02
