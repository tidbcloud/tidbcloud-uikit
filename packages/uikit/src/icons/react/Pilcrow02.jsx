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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M11.6666 2.6665V13.3332M12.9999 2.6665H5.99992C4.52716 2.6665 3.33325 3.86041 3.33325 5.33317C3.33325 6.80593 4.52716 7.99984 5.99992 7.99984H9.33325M9.33325 2.6665V13.3332M7.99992 13.3332H12.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
