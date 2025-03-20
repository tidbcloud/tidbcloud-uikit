import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMagicWand02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-1.2-6.8L19 5M3 21l9-9m.2-5.8L11 5"
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
      className={[props.className, 'tiui-icon', 'MagicWand02'].join(' ')}
    />
  )
})
MagicWand02.displayName = 'IconMagicWand02'
export default MagicWand02
