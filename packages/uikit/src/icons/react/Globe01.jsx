import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe01 = (props, ref) => {
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
        d="M12.4209 1.57861C15.415 4.57263 15.415 9.4269 12.4209 12.4209C9.55371 15.2881 4.98046 15.4096 1.96874 12.7852C1.83739 12.6707 1.77172 12.6135 1.74208 12.5353C1.71714 12.4694 1.71434 12.3881 1.73471 12.3207C1.75892 12.2406 1.82453 12.175 1.95576 12.0438L3.43259 10.567M11.9998 6.99977C11.9998 9.76119 9.76121 11.9998 6.99978 11.9998C4.23836 11.9998 1.99978 9.76119 1.99978 6.99977C1.99978 4.23834 4.23836 1.99977 6.99978 1.99977C9.76121 1.99977 11.9998 4.23834 11.9998 6.99977Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Globe01', props.className].join(' ')}
    />
  )
})
Globe01.displayName = 'IconGlobe01'
export default Globe01
