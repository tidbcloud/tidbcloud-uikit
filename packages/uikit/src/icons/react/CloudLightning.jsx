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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12.6667 10.4961C13.8319 10.0843 14.6667 8.97305 14.6667 7.66683C14.6667 6.10445 13.4724 4.82102 11.9469 4.67974C11.6348 2.78158 9.98655 1.3335 8.00004 1.3335C6.01354 1.3335 4.36525 2.78158 4.0532 4.67974C2.52771 4.82102 1.33337 6.10445 1.33337 7.66683C1.33337 8.97305 2.16818 10.0843 3.33337 10.4961M8.66671 6.66683L6.00004 10.6668H10L7.33337 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
