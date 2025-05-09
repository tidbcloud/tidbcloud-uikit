import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHexagon02 = (props, ref) => {
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
        d="M14.3786 7.48198C14.4837 7.67105 14.5362 7.76559 14.5568 7.8657C14.575 7.95431 14.575 8.04569 14.5568 8.1343C14.5362 8.23442 14.4837 8.32895 14.3786 8.51802L11.6379 13.4514C11.527 13.651 11.4715 13.7509 11.3926 13.8236C11.3228 13.8879 11.2401 13.9366 11.15 13.9663C11.0481 14 10.9339 14 10.7055 14H5.29407C5.06564 14 4.95142 14 4.84956 13.9663C4.75944 13.9366 4.67672 13.8879 4.60693 13.8236C4.52804 13.7509 4.47257 13.651 4.36163 13.4514L1.62089 8.51802C1.51585 8.32895 1.46333 8.23441 1.44274 8.1343C1.42452 8.04569 1.42452 7.95431 1.44274 7.8657C1.46334 7.76558 1.51585 7.67105 1.62089 7.48198L4.36163 2.54865C4.47257 2.34897 4.52804 2.24912 4.60693 2.17642C4.67672 2.11211 4.75944 2.06343 4.84956 2.03366C4.95143 2 5.06564 2 5.29407 2L10.7055 2C10.9339 2 11.0481 2 11.15 2.03366C11.2401 2.06343 11.3228 2.11211 11.3926 2.17642C11.4715 2.24912 11.527 2.34897 11.6379 2.54865L14.3786 7.48198Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHexagon02)
const Hexagon02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Hexagon02', props.className].join(' ')}
    />
  )
})
Hexagon02.displayName = 'IconHexagon02'
export default Hexagon02
