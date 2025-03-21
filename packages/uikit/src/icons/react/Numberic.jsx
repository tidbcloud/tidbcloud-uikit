import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNumberic = (props, ref) => {
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
      <g clipPath="url(#clip0_404_1835)">
        <path
          d="M1.3335 4.97491L14.6668 4.97491M1.3335 10.9924L14.6668 10.9924M5.99023 1.33325L3.67309 14.6666M11.9162 1.33325L9.59901 14.6666"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="inherit"
        />
      </g>
      <defs>
        <clipPath id="clip0_404_1835">
          <rect width={16} height={16} fill="white" />
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
