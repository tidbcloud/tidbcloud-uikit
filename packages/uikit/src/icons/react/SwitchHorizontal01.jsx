import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSwitchHorizontal01 = (props, ref) => {
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
        d="M13.3332 11.3333H2.6665M2.6665 11.3333L5.33317 8.66667M2.6665 11.3333L5.33317 14M2.6665 4.66667H13.3332M13.3332 4.66667L10.6665 2M13.3332 4.66667L10.6665 7.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSwitchHorizontal01)
const SwitchHorizontal01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SwitchHorizontal01', props.className].join(' ')}
    />
  )
})
SwitchHorizontal01.displayName = 'IconSwitchHorizontal01'
export default SwitchHorizontal01
