import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconKey02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path
        stroke="#F2AA18"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6h.007M10 10a4 4 0 1 0-3.964-3.462c.039.29.058.434.045.526a.6.6 0 0 1-.078.23c-.045.081-.125.16-.284.32L2.312 11.02a1.4 1.4 0 0 0-.214.24.7.7 0 0 0-.08.193C2 11.53 2 11.612 2 11.775v1.158c0 .374 0 .56.073.703a.67.67 0 0 0 .291.291c.143.073.33.073.703.073h1.158c.163 0 .244 0 .321-.018a.7.7 0 0 0 .193-.08 1.4 1.4 0 0 0 .24-.214l3.407-3.407c.16-.16.239-.239.32-.284a.6.6 0 0 1 .23-.078c.092-.013.237.006.526.045Q9.727 10 10 10"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconKey02)
const Key02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Key02'].join(' ')}
    />
  )
})
Key02.displayName = 'IconKey02'
export default Key02
