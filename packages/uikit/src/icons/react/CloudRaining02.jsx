import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining02 = (props, ref) => {
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
        d="M10.6668 8.00016V13.3335M5.3335 8.00016V13.3335M8.00016 9.3335V14.6668M13.3335 10.1616C14.1375 9.62347 14.6668 8.70697 14.6668 7.66683C14.6668 6.10445 13.4725 4.82102 11.947 4.67974C11.635 2.78158 9.98667 1.3335 8.00016 1.3335C6.01366 1.3335 4.36537 2.78158 4.05332 4.67974C2.52783 4.82102 1.3335 6.10445 1.3335 7.66683C1.3335 8.70697 1.86284 9.62347 2.66683 10.1616"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining02)
const CloudRaining02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudRaining02', props.className].join(' ')}
    />
  )
})
CloudRaining02.displayName = 'IconCloudRaining02'
export default CloudRaining02
