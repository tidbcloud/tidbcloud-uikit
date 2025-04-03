import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor01 = (props, ref) => {
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
        d="M8.66676 8.66676L12.6668 12.6668M11.9762 7.16762L8.63569 8.30221C8.54437 8.33323 8.4987 8.34874 8.46072 8.37485C8.42708 8.39797 8.39797 8.42708 8.37485 8.46072C8.34874 8.4987 8.33323 8.54437 8.30221 8.63569L7.16762 11.9762C7.02693 12.3904 6.95659 12.5975 6.84659 12.6601C6.75127 12.7144 6.63537 12.7183 6.53662 12.6706C6.42265 12.6155 6.33854 12.4136 6.1703 12.0098L2.49815 3.19558C2.34205 2.82089 2.264 2.63354 2.30198 2.51633C2.33493 2.41464 2.41464 2.33493 2.51633 2.30198C2.63354 2.264 2.82089 2.34205 3.19558 2.49815L12.0098 6.1703C12.4136 6.33854 12.6155 6.42265 12.6706 6.53662C12.7183 6.63537 12.7144 6.75127 12.6601 6.84659C12.5975 6.95659 12.3904 7.02693 11.9762 7.16762Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor01)
const Cursor01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cursor01', props.className].join(' ')}
    />
  )
})
Cursor01.displayName = 'IconCursor01'
export default Cursor01
