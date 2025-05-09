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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12.4212 1.57861C15.4152 4.57263 15.4152 9.4269 12.4212 12.4209C9.55396 15.2881 4.98071 15.4096 1.96898 12.7852C1.83764 12.6707 1.77197 12.6135 1.74232 12.5353C1.71738 12.4694 1.71459 12.3881 1.73496 12.3207C1.75917 12.2406 1.82478 12.175 1.956 12.0438L3.43283 10.567M12 6.99977C12 9.76119 9.76145 11.9998 7.00003 11.9998C4.2386 11.9998 2.00003 9.76119 2.00003 6.99977C2.00003 4.23834 4.2386 1.99977 7.00003 1.99977C9.76145 1.99977 12 4.23834 12 6.99977Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'Globe01', props.className].join(' ')}
    />
  )
})
Globe01.displayName = 'IconGlobe01'
export default Globe01
