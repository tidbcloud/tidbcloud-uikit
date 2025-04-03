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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6668 5.66683C10.6668 8.42825 8.42825 10.6668 5.66683 10.6668C5.25705 10.6668 4.85879 10.6175 4.47765 10.5246C5.26407 11.62 6.54879 12.3335 8.00016 12.3335C10.3934 12.3335 12.3335 10.3934 12.3335 8.00016C12.3335 6.54879 11.62 5.26407 10.5246 4.47765C10.6175 4.85879 10.6668 5.25705 10.6668 5.66683Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
