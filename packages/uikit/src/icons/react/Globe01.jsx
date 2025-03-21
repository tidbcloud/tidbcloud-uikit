import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 11H21M1 11C1 16.5228 5.47715 21 11 21M1 11C1 5.47715 5.47715 1 11 1M21 11C21 16.5228 16.5228 21 11 21M21 11C21 5.47715 16.5228 1 11 1M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21M11 1C8.49872 3.73835 7.07725 7.29203 7 11C7.07725 14.708 8.49872 18.2616 11 21"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe01)
const Globe01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Globe01'].join(' ')}
    />
  )
})
Globe01.displayName = 'IconGlobe01'
export default Globe01
