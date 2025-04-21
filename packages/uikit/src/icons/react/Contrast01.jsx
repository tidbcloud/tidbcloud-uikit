import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconContrast01 = (props, ref) => {
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
        d="M7.99992 1.3335C8.39437 1.3335 8.78082 1.36775 9.15645 1.43345M7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668M7.99992 1.3335V14.6668M11.8252 2.5395C12.4614 2.98596 13.016 3.54076 13.4622 4.1771M14.5667 6.84392C14.6323 7.21946 14.6666 7.60581 14.6666 8.00016C14.6666 8.39451 14.6323 8.78086 14.5667 9.15641M13.4594 11.8272C13.0135 12.4621 12.4596 13.0157 11.8245 13.4613M9.15512 14.5671C8.77991 14.6327 8.3939 14.6668 7.99992 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconContrast01)
const Contrast01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Contrast01', props.className].join(' ')}
    />
  )
})
Contrast01.displayName = 'IconContrast01'
export default Contrast01
