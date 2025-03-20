import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor04 = (props, ref) => {
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
        d="M4.407 3.414c-.458-.135-.687-.202-.843-.144a.5.5 0 0 0-.294.294c-.058.156.009.385.144.843l4.206 14.3c.125.426.188.64.314.738a.5.5 0 0 0 .39.1c.158-.027.315-.184.629-.498L12 16l4.434 4.435c.198.198.297.297.411.334a.5.5 0 0 0 .31 0c.114-.037.213-.136.41-.334l2.87-2.87c.197-.197.296-.296.333-.41a.5.5 0 0 0 0-.31c-.037-.113-.136-.212-.334-.41L16 12l3.047-3.047c.314-.314.47-.47.497-.629a.5.5 0 0 0-.1-.39c-.098-.126-.311-.189-.737-.314z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor04)
const Cursor04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Cursor04'].join(' ')}
    />
  )
})
Cursor04.displayName = 'IconCursor04'
export default Cursor04
