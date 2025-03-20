import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPenToolMinus = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 5h6m7 2L8.834 8.76c-.304.088-.457.131-.583.213a1 1 0 0 0-.282.276c-.084.125-.131.276-.224.58L4 22m0 0 12.17-3.745c.304-.093.455-.14.58-.224a1 1 0 0 0 .276-.282c.082-.126.125-.279.212-.584L19 11M4 22l6.586-6.586m11.283-7.546L18.13 4.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.396-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l3.738 3.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823M12 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPenToolMinus)
const PenToolMinus = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PenToolMinus'].join(' ')}
    />
  )
})
PenToolMinus.displayName = 'IconPenToolMinus'
export default PenToolMinus
