import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSliders01 = (props, ref) => {
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
        d="M3.33325 14V9.33333M3.33325 6.66667V2M7.99992 14V8M7.99992 5.33333V2M12.6666 14V10.6667M12.6666 8V2M1.33325 9.33333H5.33325M5.99992 5.33333H9.99992M10.6666 10.6667H14.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSliders01)
const Sliders01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sliders01', props.className].join(' ')}
    />
  )
})
Sliders01.displayName = 'IconSliders01'
export default Sliders01
