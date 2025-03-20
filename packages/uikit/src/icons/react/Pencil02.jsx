import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPencil02 = (props, ref) => {
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
        d="m18 2 4 4M2 22l1.276-4.68c.084-.305.125-.458.19-.6q.085-.19.207-.36c.092-.125.204-.237.428-.46L14.434 5.565c.198-.198.297-.297.412-.334a.5.5 0 0 1 .309 0c.114.037.213.136.41.334l2.87 2.868c.197.198.296.297.333.411.033.1.033.21 0 .31-.037.114-.136.213-.334.41L8.101 19.9c-.224.224-.336.336-.462.428a2 2 0 0 1-.358.208c-.143.064-.296.105-.6.189z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPencil02)
const Pencil02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Pencil02'].join(' ')}
    />
  )
})
Pencil02.displayName = 'IconPencil02'
export default Pencil02
