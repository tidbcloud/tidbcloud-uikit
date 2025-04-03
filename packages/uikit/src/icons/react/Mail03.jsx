import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMail03 = (props, ref) => {
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
        d="M1.3335 4.66675L4.79606 6.97512C4.99582 7.1083 5.0957 7.17488 5.20376 7.22206C5.29967 7.26393 5.40018 7.29436 5.50321 7.31272C5.61929 7.33341 5.73933 7.33341 5.97942 7.33341H10.0209C10.261 7.33341 10.381 7.33341 10.4971 7.31272C10.6001 7.29436 10.7007 7.26393 10.7966 7.22206C10.9046 7.17488 11.0045 7.10829 11.2043 6.97512L14.6668 4.66675M4.5335 13.3334H11.4668C12.5869 13.3334 13.147 13.3334 13.5748 13.1154C13.9511 12.9237 14.2571 12.6177 14.4488 12.2414C14.6668 11.8136 14.6668 11.2535 14.6668 10.1334V5.86675C14.6668 4.74664 14.6668 4.18659 14.4488 3.75877C14.2571 3.38244 13.9511 3.07648 13.5748 2.88473C13.147 2.66675 12.5869 2.66675 11.4668 2.66675H4.5335C3.41339 2.66675 2.85334 2.66675 2.42552 2.88473C2.04919 3.07648 1.74323 3.38244 1.55148 3.75877C1.3335 4.18659 1.3335 4.74664 1.3335 5.86675V10.1334C1.3335 11.2535 1.3335 11.8136 1.55148 12.2414C1.74323 12.6177 2.04919 12.9237 2.42552 13.1154C2.85334 13.3334 3.41339 13.3334 4.5335 13.3334Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMail03)
const Mail03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Mail03', props.className].join(' ')}
    />
  )
})
Mail03.displayName = 'IconMail03'
export default Mail03
