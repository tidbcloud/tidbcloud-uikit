import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor03 = (props, ref) => {
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
        d="M4.712 3.674c-.541-.212-.811-.319-.984-.262a.5.5 0 0 0-.316.317c-.057.172.049.442.262.983l5.3 13.456c.172.435.258.652.398.74a.5.5 0 0 0 .408.055c.158-.047.298-.234.579-.609l2.14-2.854 3.45 4.743c.19.26.284.391.405.446a.5.5 0 0 0 .338.026c.128-.035.242-.149.47-.377l3.176-3.176c.227-.228.341-.342.377-.47a.5.5 0 0 0-.027-.337c-.054-.121-.185-.216-.446-.406L15.5 12.5l2.854-2.14c.374-.281.561-.422.608-.58a.5.5 0 0 0-.055-.408c-.087-.14-.305-.225-.74-.397z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor03)
const Cursor03 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Cursor03.displayName = 'IconCursor03'
export default Cursor03
