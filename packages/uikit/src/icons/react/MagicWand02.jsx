import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMagicWand02 = (props, ref) => {
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
        d="M10 2.66683V1.3335M10 10.6668V9.3335M5.33333 6.00016H6.66667M13.3333 6.00016H14.6667M11.8667 7.86683L12.6667 8.66683M11.8667 4.1335L12.6667 3.3335M2 14.0002L8 8.00016M8.13333 4.1335L7.33333 3.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMagicWand02)
const MagicWand02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MagicWand02', props.className].join(' ')}
    />
  )
})
MagicWand02.displayName = 'IconMagicWand02'
export default MagicWand02
