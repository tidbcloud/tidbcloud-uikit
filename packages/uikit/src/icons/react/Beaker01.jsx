import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBeaker01 = (props, ref) => {
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
        d="M6.66667 1.33355V4.4405C6.66667 4.58528 6.66667 4.65767 6.6446 4.71526C6.62379 4.76958 6.59624 4.80902 6.55239 4.84725C6.5059 4.88778 6.43062 4.91536 6.28005 4.97051C4.36595 5.67173 3 7.50976 3 9.66683C3 12.4283 5.23858 14.6668 8 14.6668C10.7614 14.6668 13 12.4283 13 9.66683C13 7.50976 11.6341 5.67173 9.71995 4.97051C9.56938 4.91536 9.4941 4.88778 9.44761 4.84725C9.40376 4.80902 9.37621 4.76958 9.3554 4.71526C9.33333 4.65767 9.33333 4.58528 9.33333 4.4405V1.33355M5.66667 1.3335H10.3333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBeaker01)
const Beaker01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Beaker01', props.className].join(' ')}
    />
  )
})
Beaker01.displayName = 'IconBeaker01'
export default Beaker01
