import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining03 = (props, ref) => {
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
        d="M13.3335 10.1616C14.1375 9.62347 14.6668 8.70697 14.6668 7.66683C14.6668 6.10445 13.4725 4.82102 11.947 4.67974C11.635 2.78158 9.98667 1.3335 8.00016 1.3335C6.01366 1.3335 4.36537 2.78158 4.05332 4.67974C2.52783 4.82102 1.3335 6.10445 1.3335 7.66683C1.3335 8.70697 1.86284 9.62347 2.66683 10.1616M8.1668 10.0002L6.30013 14.6668M11.3668 8.66683L9.50016 13.3335M6.0335 8.66683L4.16683 13.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining03)
const CloudRaining03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudRaining03', props.className].join(' ')}
    />
  )
})
CloudRaining03.displayName = 'IconCloudRaining03'
export default CloudRaining03
