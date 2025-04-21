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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12 5.33333L14.6666 8M14.6666 8L12 10.6667M14.6666 8H5.99998M9.99998 2.80269C9.15015 2.29218 8.16348 2 7.11109 2C3.92011 2 1.33331 4.68629 1.33331 8C1.33331 11.3137 3.92011 14 7.11109 14C8.16348 14 9.15015 13.7078 9.99998 13.1973"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
