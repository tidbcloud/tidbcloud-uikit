import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M2.66113 18.3391L7.25499 13.7452M18.2175 2.78271C21.9275 6.4927 21.9275 12.5078 18.2175 16.2177C14.5075 19.9277 8.49243 19.9277 4.78245 16.2177M17 22.0002H6.99997M12 22.0002V19.0002M17.5 9.50023C17.5 12.8139 14.8137 15.5002 11.5 15.5002C8.18626 15.5002 5.49997 12.8139 5.49997 9.50023C5.49997 6.18652 8.18626 3.50023 11.5 3.50023C14.8137 3.50023 17.5 6.18652 17.5 9.50023Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe02)
const Globe02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Globe02'].join(' ')}
    />
  )
})
Globe02.displayName = 'IconGlobe02'
export default Globe02
