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
      ref={ref}
      {...props}
    >
      <path
        d="M14.3788 7.48198C14.4838 7.67105 14.5363 7.76559 14.5569 7.8657C14.5751 7.95431 14.5751 8.04569 14.5569 8.1343C14.5363 8.23442 14.4838 8.32895 14.3788 8.51802L11.638 13.4514C11.5271 13.651 11.4716 13.7509 11.3927 13.8236C11.3229 13.8879 11.2402 13.9366 11.1501 13.9663C11.0482 14 10.934 14 10.7056 14H5.29419C5.06576 14 4.95155 14 4.84968 13.9663C4.75956 13.9366 4.67684 13.8879 4.60705 13.8236C4.52816 13.7509 4.47269 13.651 4.36176 13.4514L1.62102 8.51802C1.51598 8.32895 1.46346 8.23441 1.44287 8.1343C1.42464 8.04569 1.42464 7.95431 1.44287 7.8657C1.46346 7.76558 1.51598 7.67105 1.62102 7.48198L4.36176 2.54865C4.47269 2.34897 4.52816 2.24912 4.60705 2.17642C4.67684 2.11211 4.75956 2.06343 4.84968 2.03366C4.95155 2 5.06576 2 5.29419 2L10.7056 2C10.934 2 11.0482 2 11.1501 2.03366C11.2402 2.06343 11.3229 2.11211 11.3927 2.17642C11.4716 2.24912 11.5271 2.34897 11.638 2.54865L14.3788 7.48198Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
