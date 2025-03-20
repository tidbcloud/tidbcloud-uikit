import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRight = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12.6667L7.64647 17.0559C7.67699 17.0927 7.71006 17.1267 7.74359 17.1608C7.97684 17.3975 8.46753 18 8.92308 18C9.3818 18 10.0542 17.2283 10.1438 17.123C10.1507 17.1149 10.1574 17.1071 10.1644 17.0992L20 6"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRight)
const Right = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Right'].join(' ')}
    />
  )
})
Right.displayName = 'IconRight'
export default Right
