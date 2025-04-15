import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudLightning = (props, ref) => {
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
        d="M12.6668 10.4961C13.832 10.0843 14.6668 8.97305 14.6668 7.66683C14.6668 6.10445 13.4725 4.82102 11.947 4.67974C11.635 2.78158 9.98667 1.3335 8.00016 1.3335C6.01366 1.3335 4.36537 2.78158 4.05332 4.67974C2.52783 4.82102 1.3335 6.10445 1.3335 7.66683C1.3335 8.97305 2.1683 10.0843 3.3335 10.4961M8.66683 6.66683L6.00016 10.6668H10.0002L7.3335 14.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudLightning)
const CloudLightning = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudLightning', props.className].join(' ')}
    />
  )
})
CloudLightning.displayName = 'IconCloudLightning'
export default CloudLightning
