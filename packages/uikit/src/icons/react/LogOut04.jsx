import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogOut04 = (props, ref) => {
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
        d="M12.0002 5.33333L14.6668 8M14.6668 8L12.0002 10.6667M14.6668 8H6.00016M10.0002 2.80269C9.15033 2.29218 8.16366 2 7.11127 2C3.9203 2 1.3335 4.68629 1.3335 8C1.3335 11.3137 3.9203 14 7.11127 14C8.16366 14 9.15033 13.7078 10.0002 13.1973"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogOut04)
const LogOut04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogOut04', props.className].join(' ')}
    />
  )
})
LogOut04.displayName = 'IconLogOut04'
export default LogOut04
