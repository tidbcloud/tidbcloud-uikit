import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLuggage01 = (props, ref) => {
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
        d="M5.33332 14.6668V13.3335M6.33332 10.0002V4.66683M10.6667 14.6668V13.3335M9.66666 10.0002V4.66683M5.86666 13.3335H10.1333C11.2534 13.3335 11.8135 13.3335 12.2413 13.1155C12.6176 12.9238 12.9236 12.6178 13.1153 12.2415C13.3333 11.8137 13.3333 11.2536 13.3333 10.1335V4.5335C13.3333 3.41339 13.3333 2.85334 13.1153 2.42552C12.9236 2.04919 12.6176 1.74323 12.2413 1.55148C11.8135 1.3335 11.2534 1.3335 10.1333 1.3335H5.86666C4.74655 1.3335 4.1865 1.3335 3.75868 1.55148C3.38235 1.74323 3.07639 2.04919 2.88464 2.42552C2.66666 2.85334 2.66666 3.41339 2.66666 4.5335V10.1335C2.66666 11.2536 2.66666 11.8137 2.88464 12.2415C3.07639 12.6178 3.38235 12.9238 3.75868 13.1155C4.1865 13.3335 4.74655 13.3335 5.86666 13.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLuggage01)
const Luggage01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Luggage01', props.className].join(' ')}
    />
  )
})
Luggage01.displayName = 'IconLuggage01'
export default Luggage01
