import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPaintPour = (props, ref) => {
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
        d="M16 11H2m8-7L8 2m6 20H2m20-6a2 2 0 1 1-4 0c0-1.105 2-3 2-3s2 1.895 2 3M9 3l6.868 6.869c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822l-4.606 4.606c-.792.792-1.188 1.188-1.644 1.337a2 2 0 0 1-1.236 0c-.457-.149-.853-.545-1.645-1.337l-3.475-3.474c-.792-.792-1.188-1.188-1.336-1.645a2 2 0 0 1 0-1.236c.148-.457.544-.853 1.336-1.645z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPaintPour)
const PaintPour = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PaintPour'].join(' ')}
    />
  )
})
PaintPour.displayName = 'IconPaintPour'
export default PaintPour
