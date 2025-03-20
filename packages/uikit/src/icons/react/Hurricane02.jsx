import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHurricane02 = (props, ref) => {
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
        d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12M18 12C18 16.4183 14.4183 20 10 20C5.58172 20 2 16.4183 2 12M6 12C6 7.58172 9.58172 4 14 4C18.4183 4 22 7.58172 22 12M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHurricane02)
const Hurricane02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hurricane02'].join(' ')}
    />
  )
})
Hurricane02.displayName = 'IconHurricane02'
export default Hurricane02
