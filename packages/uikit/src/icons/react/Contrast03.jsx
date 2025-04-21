import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconContrast03 = (props, ref) => {
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
        d="M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M10.6666 5.66683C10.6666 8.42825 8.42801 10.6668 5.66659 10.6668C5.25681 10.6668 4.85855 10.6175 4.47741 10.5246C5.26382 11.62 6.54854 12.3335 7.99992 12.3335C10.3932 12.3335 12.3333 10.3934 12.3333 8.00016C12.3333 6.54879 11.6197 5.26407 10.5243 4.47765C10.6173 4.85879 10.6666 5.25705 10.6666 5.66683Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconContrast03)
const Contrast03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Contrast03', props.className].join(' ')}
    />
  )
})
Contrast03.displayName = 'IconContrast03'
export default Contrast03
