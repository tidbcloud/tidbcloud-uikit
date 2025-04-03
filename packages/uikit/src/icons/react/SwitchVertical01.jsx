import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSwitchVertical01 = (props, ref) => {
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
        d="M11.3333 2.66663V13.3333M11.3333 13.3333L8.66667 10.6666M11.3333 13.3333L14 10.6666M4.66667 13.3333V2.66663M4.66667 2.66663L2 5.33329M4.66667 2.66663L7.33333 5.33329"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSwitchVertical01)
const SwitchVertical01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SwitchVertical01', props.className].join(' ')}
    />
  )
})
SwitchVertical01.displayName = 'IconSwitchVertical01'
export default SwitchVertical01
