import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDotPoints02 = (props, ref) => {
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
        d="M14 3.3335L6.66667 3.3335M14 12.6668L6.66667 12.6668M14 8.00016L6.66667 8.00016M4 3.3335C4 3.88578 3.55228 4.3335 3 4.3335C2.44772 4.3335 2 3.88578 2 3.3335C2 2.78121 2.44772 2.3335 3 2.3335C3.55228 2.3335 4 2.78121 4 3.3335ZM4 12.6668C4 13.2191 3.55228 13.6668 3 13.6668C2.44772 13.6668 2 13.2191 2 12.6668C2 12.1145 2.44772 11.6668 3 11.6668C3.55228 11.6668 4 12.1145 4 12.6668ZM4 8.00016C4 8.55245 3.55228 9.00016 3 9.00016C2.44772 9.00016 2 8.55245 2 8.00016C2 7.44788 2.44772 7.00016 3 7.00016C3.55228 7.00016 4 7.44788 4 8.00016Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDotPoints02)
const DotPoints02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DotPoints02', props.className].join(' ')}
    />
  )
})
DotPoints02.displayName = 'IconDotPoints02'
export default DotPoints02
