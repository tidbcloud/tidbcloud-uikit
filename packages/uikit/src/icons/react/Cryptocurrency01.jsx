import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M17.8779 20.0899C16.1694 21.3312 14.1118 21.9998 12 21.9998C9.88821 21.9998 7.83063 21.3312 6.12215 20.0899M16.3837 3.01182C18.2818 3.93756 19.8381 5.44044 20.8295 7.30504C21.8209 9.16964 22.1966 11.3002 21.9027 13.3915M2.09742 13.3914C1.80352 11.3002 2.1792 9.16955 3.17063 7.30494C4.16205 5.44034 5.71832 3.93747 7.61639 3.01172M17.5 11.9998C17.5 15.0373 15.0376 17.4998 12 17.4998C8.96244 17.4998 6.50001 15.0373 6.50001 11.9998C6.50001 8.96219 8.96244 6.49976 12 6.49976C15.0376 6.49976 17.5 8.96219 17.5 11.9998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency01)
const Cryptocurrency01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cryptocurrency01', props.className].join(' ')}
    />
  )
})
Cryptocurrency01.displayName = 'IconCryptocurrency01'
export default Cryptocurrency01
