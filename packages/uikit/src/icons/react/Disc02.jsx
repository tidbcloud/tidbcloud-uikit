import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDisc02 = (props, ref) => {
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
        d="M9.99992 3.78234C11.5766 4.53132 12.6666 6.13832 12.6666 7.99992M5.59486 11.9999C4.23964 11.1833 3.33325 9.69744 3.33325 7.99989M14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992ZM9.99992 7.99992C9.99992 9.10449 9.10449 9.99992 7.99992 9.99992C6.89535 9.99992 5.99992 9.10449 5.99992 7.99992C5.99992 6.89535 6.89535 5.99992 7.99992 5.99992C9.10449 5.99992 9.99992 6.89535 9.99992 7.99992Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDisc02)
const Disc02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Disc02', props.className].join(' ')}
    />
  )
})
Disc02.displayName = 'IconDisc02'
export default Disc02
