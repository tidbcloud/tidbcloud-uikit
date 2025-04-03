import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSwitchVertical02 = (props, ref) => {
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
        d="M4.66667 2.66663V13.3333M4.66667 13.3333L2 10.6666M4.66667 13.3333L7.33333 10.6666M11.3333 13.3333V2.66663M11.3333 2.66663L8.66667 5.33329M11.3333 2.66663L14 5.33329"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSwitchVertical02)
const SwitchVertical02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SwitchVertical02', props.className].join(' ')}
    />
  )
})
SwitchVertical02.displayName = 'IconSwitchVertical02'
export default SwitchVertical02
