import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPencil01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.5 21.5 5.55-2.134c.354-.137.532-.205.698-.294q.221-.12.42-.274c.149-.115.283-.25.552-.518L21 7a2.828 2.828 0 1 0-4-4L5.72 14.28c-.269.268-.403.403-.519.552a3 3 0 0 0-.273.42c-.089.166-.157.344-.294.699zm0 0 2.058-5.351c.147-.383.221-.575.347-.662a.5.5 0 0 1 .38-.08c.15.028.295.173.585.463l2.26 2.26c.29.29.435.434.464.585a.5.5 0 0 1-.08.38c-.089.126-.28.2-.663.347z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPencil01)
const Pencil01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Pencil01'].join(' ')}
    />
  )
})
Pencil01.displayName = 'IconPencil01'
export default Pencil01
