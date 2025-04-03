import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShield03 = (props, ref) => {
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
        d="M8.00033 1.66666V14.3333M13.3337 8C13.3337 11.2723 9.76435 13.6523 8.46565 14.4099C8.31806 14.496 8.24426 14.5391 8.14011 14.5614C8.05929 14.5787 7.94136 14.5787 7.86054 14.5614C7.75639 14.5391 7.68259 14.496 7.535 14.4099C6.2363 13.6523 2.66699 11.2723 2.66699 8V4.81173C2.66699 4.27872 2.66699 4.01222 2.75417 3.78313C2.83118 3.58076 2.95631 3.40018 3.11876 3.25702C3.30266 3.09495 3.55219 3.00138 4.05126 2.81423L7.62579 1.47378C7.76439 1.4218 7.83369 1.39582 7.90498 1.38552C7.96822 1.37638 8.03243 1.37638 8.09567 1.38552C8.16696 1.39582 8.23626 1.4218 8.37486 1.47378L11.9494 2.81423C12.4485 3.00138 12.698 3.09495 12.8819 3.25702C13.0443 3.40018 13.1695 3.58076 13.2465 3.78313C13.3337 4.01222 13.3337 4.27872 13.3337 4.81173V8Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShield03)
const Shield03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Shield03', props.className].join(' ')}
    />
  )
})
Shield03.displayName = 'IconShield03'
export default Shield03
