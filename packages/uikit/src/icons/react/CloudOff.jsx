import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudOff = (props, ref) => {
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
        d="M14.467 10.7454C14.5961 10.4106 14.6668 10.0469 14.6668 9.66667C14.6668 8.10429 13.4725 6.82086 11.947 6.67958C11.635 4.78142 9.98667 3.33333 8.00016 3.33333C7.70245 3.33333 7.41234 3.36586 7.13318 3.42755M4.85847 4.85723C4.44894 5.37613 4.16522 5.99892 4.05332 6.67958C2.52783 6.82086 1.3335 8.10429 1.3335 9.66667C1.3335 11.3235 2.67664 12.6667 4.3335 12.6667H11.6668C11.9709 12.6667 12.2644 12.6214 12.5409 12.5373M2.00016 2L14.0002 14"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudOff)
const CloudOff = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudOff', props.className].join(' ')}
    />
  )
})
CloudOff.displayName = 'IconCloudOff'
export default CloudOff
