import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMoon01 = (props, ref) => {
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
        d="M14.6668 10.563C13.7912 10.959 12.8193 11.1794 11.7958 11.1794C7.94369 11.1794 4.82093 8.05664 4.82093 4.20452C4.82093 3.18106 5.04137 2.20909 5.43735 1.3335C3.01734 2.42792 1.3335 4.8633 1.3335 7.69196C1.3335 11.5441 4.45625 14.6668 8.30837 14.6668C11.137 14.6668 13.5724 12.983 14.6668 10.563Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMoon01)
const Moon01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Moon01', props.className].join(' ')}
    />
  )
})
Moon01.displayName = 'IconMoon01'
export default Moon01
