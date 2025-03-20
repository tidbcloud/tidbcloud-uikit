import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBellRinging02 = (props, ref) => {
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
        d="M14 21h-4M2.294 5.82A4.01 4.01 0 0 1 4.326 2.3m17.377 3.52A4.01 4.01 0 0 0 19.67 2.3M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.088 1.936.015.182.053.252.2.36.133.099.73.099 1.927.099h13.222c1.197 0 1.795 0 1.927-.098.147-.11.186-.179.201-.361.013-.165-.354-.755-1.088-1.936C18.78 13.206 18 11.09 18 8"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBellRinging02)
const BellRinging02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'BellRinging02'].join(' ')}
    />
  )
})
BellRinging02.displayName = 'IconBellRinging02'
export default BellRinging02
