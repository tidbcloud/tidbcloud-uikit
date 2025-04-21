import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLock03 = (props, ref) => {
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
        d="M11.3334 7.33333V5.33333C11.3334 3.49238 9.84103 2 8.00008 2C6.15913 2 4.66675 3.49238 4.66675 5.33333V7.33333M5.86675 14H10.1334C11.2535 14 11.8136 14 12.2414 13.782C12.6177 13.5903 12.9237 13.2843 13.1154 12.908C13.3334 12.4802 13.3334 11.9201 13.3334 10.8V10.5333C13.3334 9.41323 13.3334 8.85318 13.1154 8.42535C12.9237 8.04903 12.6177 7.74307 12.2414 7.55132C11.8136 7.33333 11.2535 7.33333 10.1334 7.33333H5.86675C4.74664 7.33333 4.18659 7.33333 3.75877 7.55132C3.38244 7.74307 3.07648 8.04903 2.88473 8.42535C2.66675 8.85318 2.66675 9.41323 2.66675 10.5333V10.8C2.66675 11.9201 2.66675 12.4802 2.88473 12.908C3.07648 13.2843 3.38244 13.5903 3.75877 13.782C4.18659 14 4.74664 14 5.86675 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLock03)
const Lock03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lock03', props.className].join(' ')}
    />
  )
})
Lock03.displayName = 'IconLock03'
export default Lock03
