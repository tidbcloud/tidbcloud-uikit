import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNumberic = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M1.3335 4.97491L14.6668 4.97491M1.3335 10.9924L14.6668 10.9924M5.99023 1.33325L3.67309 14.6666M11.9162 1.33325L9.59901 14.6666"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0H16V16H0z" strokeWidth="inherit" stroke="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconNumberic)
const Numberic = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Numberic'].join(' ')}
    />
  )
})
Numberic.displayName = 'IconNumberic'
export default Numberic
