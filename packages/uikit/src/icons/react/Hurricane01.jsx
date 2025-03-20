import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHurricane01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 20.5c-1.254.314-2.812.5-4.5.5s-3.247-.186-4.5-.5M18 16.43c-1.466.554-3.61.903-6 .903s-4.534-.349-6-.902m-1.5-4.763c1.431.892 4.253 1.499 7.5 1.499s6.069-.607 7.5-1.5M21 6c0 1.657-4.03 3-9 3S3 7.657 3 6s4.03-3 9-3 9 1.343 9 3"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHurricane01)
const Hurricane01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hurricane01'].join(' ')}
    />
  )
})
Hurricane01.displayName = 'IconHurricane01'
export default Hurricane01
