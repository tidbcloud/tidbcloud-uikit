import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPilcrow01 = (props, ref) => {
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
        d="M10.6667 2.6665V13.3332M10.6667 2.6665H12M10.6667 2.6665H7C5.34315 2.6665 4 4.00965 4 5.6665C4 7.32336 5.34315 8.6665 7 8.6665H10.6667V2.6665ZM9.33333 13.3332H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPilcrow01)
const Pilcrow01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Pilcrow01', props.className].join(' ')}
    />
  )
})
Pilcrow01.displayName = 'IconPilcrow01'
export default Pilcrow01
