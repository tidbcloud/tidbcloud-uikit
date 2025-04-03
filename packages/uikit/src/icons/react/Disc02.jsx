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
      ref={ref}
      {...props}
    >
      <path
        d="M10.0002 3.78234C11.5768 4.53132 12.6668 6.13832 12.6668 7.99992M5.5951 11.9999C4.23988 11.1833 3.3335 9.69744 3.3335 7.99989M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992ZM10.0002 7.99992C10.0002 9.10449 9.10473 9.99992 8.00016 9.99992C6.89559 9.99992 6.00016 9.10449 6.00016 7.99992C6.00016 6.89535 6.89559 5.99992 8.00016 5.99992C9.10473 5.99992 10.0002 6.89535 10.0002 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
