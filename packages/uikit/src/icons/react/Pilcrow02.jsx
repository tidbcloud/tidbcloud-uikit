import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPilcrow02 = (props, ref) => {
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
        d="M11.6668 2.6665V13.3332M13.0002 2.6665H6.00016C4.5274 2.6665 3.3335 3.86041 3.3335 5.33317C3.3335 6.80593 4.5274 7.99984 6.00016 7.99984H9.3335M9.3335 2.6665V13.3332M8.00016 13.3332H13.0002"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPilcrow02)
const Pilcrow02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Pilcrow02', props.className].join(' ')}
    />
  )
})
Pilcrow02.displayName = 'IconPilcrow02'
export default Pilcrow02
