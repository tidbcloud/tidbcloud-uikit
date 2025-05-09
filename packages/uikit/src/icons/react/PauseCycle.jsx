import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPauseCycle = (props, ref) => {
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
        d="M9.87757 6.02818V10.4574M6.12194 6.02818L6.12194 10.4574M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31779 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31779 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPauseCycle)
const PauseCycle = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PauseCycle', props.className].join(' ')}
    />
  )
})
PauseCycle.displayName = 'IconPauseCycle'
export default PauseCycle
