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
      ref={ref}
      {...props}
    >
      <path
        d="M3.3335 14V9.33333M3.3335 6.66667V2M8.00016 14V8M8.00016 5.33333V2M12.6668 14V10.6667M12.6668 8V2M1.3335 9.33333H5.3335M6.00016 5.33333H10.0002M10.6668 10.6667H14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
