import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrush03 = (props, ref) => {
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
        d="M13.3334 6.66683V2.40016C13.3334 2.02679 13.3334 1.84011 13.2608 1.6975C13.1968 1.57206 13.0948 1.47007 12.9694 1.40616C12.8268 1.3335 12.6401 1.3335 12.2667 1.3335H3.73341C3.36005 1.3335 3.17336 1.3335 3.03075 1.40616C2.90531 1.47007 2.80333 1.57206 2.73941 1.6975C2.66675 1.84011 2.66675 2.02679 2.66675 2.40016V6.66683M13.3334 6.66683H2.66675M13.3334 6.66683V6.80016C13.3334 7.92027 13.3334 8.48032 13.1154 8.90814C12.9237 9.28447 12.6177 9.59043 12.2414 9.78218C11.8136 10.0002 11.2535 10.0002 10.1334 10.0002H5.86675C4.74664 10.0002 4.18659 10.0002 3.75877 9.78218C3.38244 9.59043 3.07648 9.28447 2.88473 8.90814C2.66675 8.48032 2.66675 7.92027 2.66675 6.80016V6.66683M9.66675 10.0002V13.0002C9.66675 13.9206 8.92056 14.6668 8.00008 14.6668C7.07961 14.6668 6.33341 13.9206 6.33341 13.0002V10.0002"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBrush03)
const Brush03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Brush03', props.className].join(' ')}
    />
  )
})
Brush03.displayName = 'IconBrush03'
export default Brush03
