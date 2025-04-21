import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRocket02 = (props, ref) => {
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
        d="M8.00002 9.99984L6.00002 7.99984M8.00002 9.99984C8.93125 9.64567 9.82461 9.19899 10.6667 8.66651M8.00002 9.99984V13.3332C8.00002 13.3332 10.02 12.9665 10.6667 11.9998C11.3867 10.9198 10.6667 8.66651 10.6667 8.66651M6.00002 7.99984C6.35478 7.07946 6.80149 6.19722 7.33335 5.36651C8.11014 4.1245 9.19177 3.10187 10.4754 2.3959C11.7589 1.68993 13.2018 1.32409 14.6667 1.33317C14.6667 3.14651 14.1467 6.33317 10.6667 8.66651M6.00002 7.99984H2.66669C2.66669 7.99984 3.03335 5.97984 4.00002 5.33317C5.08002 4.61317 7.33335 5.33317 7.33335 5.33317M3.00002 10.9998C2.00002 11.8398 1.66669 14.3332 1.66669 14.3332C1.66669 14.3332 4.16002 13.9998 5.00002 12.9998C5.47335 12.4398 5.46669 11.5798 4.94002 11.0598C4.68089 10.8125 4.33955 10.6696 3.9815 10.6585C3.62346 10.6475 3.27394 10.769 3.00002 10.9998Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRocket02)
const Rocket02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Rocket02', props.className].join(' ')}
    />
  )
})
Rocket02.displayName = 'IconRocket02'
export default Rocket02
