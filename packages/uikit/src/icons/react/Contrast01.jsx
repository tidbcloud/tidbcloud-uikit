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
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 1.3335C8.39461 1.3335 8.78106 1.36775 9.15669 1.43345M8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668M8.00016 1.3335V14.6668M11.8255 2.5395C12.4616 2.98596 13.0162 3.54076 13.4624 4.1771M14.5669 6.84392C14.6326 7.21946 14.6668 7.60581 14.6668 8.00016C14.6668 8.39451 14.6326 8.78086 14.5669 9.15641M13.4596 11.8272C13.0137 12.4621 12.4599 13.0157 11.8248 13.4613M9.15537 14.5671C8.78015 14.6327 8.39415 14.6668 8.00016 14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
