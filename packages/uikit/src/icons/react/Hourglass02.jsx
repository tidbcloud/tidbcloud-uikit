import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHourglass02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.163 2H5.837A.837.837 0 0 0 5 2.837a10.05 10.05 0 0 0 2.943 7.106l1.22 1.22c.12.12.181.181.224.24a1 1 0 0 1 0 1.195 3 3 0 0 1-.224.24l-1.22 1.219A10.05 10.05 0 0 0 5 21.163c0 .462.375.837.837.837h12.326a.837.837 0 0 0 .837-.837 10.05 10.05 0 0 0-2.943-7.106l-1.22-1.22c-.12-.12-.181-.181-.224-.24a1 1 0 0 1 0-1.195c.043-.058.103-.118.224-.24l1.22-1.219A10.05 10.05 0 0 0 19 2.837.837.837 0 0 0 18.163 2"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHourglass02)
const Hourglass02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Hourglass02'].join(' ')}
    />
  )
})
Hourglass02.displayName = 'IconHourglass02'
export default Hourglass02
