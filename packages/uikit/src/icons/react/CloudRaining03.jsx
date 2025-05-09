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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M13.3334 10.1616C14.1374 9.62347 14.6667 8.70697 14.6667 7.66683C14.6667 6.10445 13.4724 4.82102 11.9469 4.67974C11.6348 2.78158 9.98655 1.3335 8.00004 1.3335C6.01354 1.3335 4.36525 2.78158 4.0532 4.67974C2.52771 4.82102 1.33337 6.10445 1.33337 7.66683C1.33337 8.70697 1.86272 9.62347 2.66671 10.1616M8.16668 10.0002L6.30001 14.6668M11.3667 8.66683L9.50004 13.3335M6.03337 8.66683L4.16671 13.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
