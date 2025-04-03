import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWifi = (props, ref) => {
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
        d="M8.00033 13H8.00699M15.2046 5.80051C13.3067 4.06133 10.7774 3 8.00025 3C5.22309 3 2.69381 4.06133 0.795898 5.80051M3.15495 8.16198C4.44703 7.02377 6.14304 6.33333 8.00031 6.33333C9.85758 6.33333 11.5536 7.02377 12.8457 8.16198M10.4659 10.5167C9.78647 9.98418 8.93044 9.66667 8.00025 9.66667C7.05599 9.66667 6.18814 9.99386 5.50391 10.5411"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWifi)
const Wifi = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wifi', props.className].join(' ')}
    />
  )
})
Wifi.displayName = 'IconWifi'
export default Wifi
