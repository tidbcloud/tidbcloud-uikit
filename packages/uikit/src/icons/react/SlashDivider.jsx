import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSlashDivider = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path d="M7 22L17 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="inherit" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSlashDivider)
const SlashDivider = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SlashDivider'].join(' ')}
    />
  )
})
SlashDivider.displayName = 'IconSlashDivider'
export default SlashDivider
